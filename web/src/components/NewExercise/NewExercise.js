import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import ExerciseForm from 'src/components/ExerciseForm';

import { QUERY } from 'src/components/ExercisesCell';

const CREATE_EXERCISE_MUTATION = gql`
  mutation CreateExerciseMutation($input: CreateExerciseInput!) {
    createExercise(input: $input) {
      id
    }
  }
`;

const NewExercise = () => {
  const [createExercise, { loading, error }] = useMutation(
    CREATE_EXERCISE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Exercise created');
        navigate(routes.exercises());
      },
    },
  );

  const onSave = (input) => {
    createExercise({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Exercise</h2>
      </header>
      <div className="rw-segment-main">
        <ExerciseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewExercise;
