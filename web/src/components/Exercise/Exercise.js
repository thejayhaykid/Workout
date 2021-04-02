import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

import { QUERY } from 'src/components/ExercisesCell';

const DELETE_EXERCISE_MUTATION = gql`
  mutation DeleteExerciseMutation($id: Int!) {
    deleteExercise(id: $id) {
      id
    }
  }
`;

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />;
};

const Exercise = ({ exercise }) => {
  const [deleteExercise] = useMutation(DELETE_EXERCISE_MUTATION, {
    onCompleted: () => {
      toast.success('Exercise deleted');
      navigate(routes.exercises());
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete exercise ' + id + '?')) {
      deleteExercise({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Exercise {exercise.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{exercise.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{exercise.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{exercise.description}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{exercise.category}</td>
            </tr>
            <tr>
              <th>Focus</th>
              <td>{exercise.focus}</td>
            </tr>
            <tr>
              <th>Date added</th>
              <td>{timeTag(exercise.dateAdded)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editExercise({ id: exercise.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(exercise.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default Exercise;
