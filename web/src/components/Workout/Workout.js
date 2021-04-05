import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';
import { useAuth } from '@redwoodjs/auth';

import { QUERY } from 'src/components/WorkoutsCell';

const DELETE_WORKOUT_MUTATION = gql`
  mutation DeleteWorkoutMutation($id: Int!) {
    deleteWorkout(id: $id) {
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

const Workout = ({ workout }) => {
  const [deleteWorkout] = useMutation(DELETE_WORKOUT_MUTATION, {
    onCompleted: () => {
      toast.success('Workout deleted');
      navigate(routes.workouts());
    },
  });
  const { isAuthenticated } = useAuth();

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete workout ' + id + '?')) {
      deleteWorkout({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Workout {workout.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{workout.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{workout.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{workout.description}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{workout.category}</td>
            </tr>
            <tr>
              <th>Focus</th>
              <td>{workout.focus}</td>
            </tr>
            <tr>
              <th>Date added</th>
              <td>{timeTag(workout.dateAdded)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {isAuthenticated ? (
        <nav className="rw-button-group">
          <Link
            to={routes.editWorkout({ id: workout.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
          <button
            href="#"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(workout.id)}
          >
            Delete
          </button>
        </nav>
      ) : null}
    </>
  );
};

export default Workout;
