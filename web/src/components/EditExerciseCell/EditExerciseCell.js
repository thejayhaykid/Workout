import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import ExerciseForm from 'src/components/ExerciseForm';

export const QUERY = gql`
  query FIND_EXERCISE_BY_ID($id: Int!) {
    exercise: exercise(id: $id) {
      id
      title
      description
      category
      focus
      dateAdded
    }
  }
`;
const UPDATE_EXERCISE_MUTATION = gql`
  mutation UpdateExerciseMutation($id: Int!, $input: UpdateExerciseInput!) {
    updateExercise(id: $id, input: $input) {
      id
      title
      description
      category
      focus
      dateAdded
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ exercise }) => {
  const [updateExercise, { loading, error }] = useMutation(
    UPDATE_EXERCISE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Exercise updated');
        navigate(routes.exercises());
      },
    },
  );

  const onSave = (input, id) => {
    updateExercise({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Exercise {exercise.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ExerciseForm
          exercise={exercise}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
