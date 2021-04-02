import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import WorkoutForm from 'src/components/WorkoutForm';

export const QUERY = gql`
  query FIND_WORKOUT_BY_ID($id: Int!) {
    workout: workout(id: $id) {
      id
      title
      description
      category
      focus
      dateAdded
    }
  }
`;
const UPDATE_WORKOUT_MUTATION = gql`
  mutation UpdateWorkoutMutation($id: Int!, $input: UpdateWorkoutInput!) {
    updateWorkout(id: $id, input: $input) {
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

export const Success = ({ workout }) => {
  const [updateWorkout, { loading, error }] = useMutation(
    UPDATE_WORKOUT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Workout updated');
        navigate(routes.workouts());
      },
    },
  );

  const onSave = (input, id) => {
    updateWorkout({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Workout {workout.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WorkoutForm
          workout={workout}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
