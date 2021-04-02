import ExercisesLayout from 'src/layouts/ExercisesLayout';
import ExerciseCell from 'src/components/ExerciseCell';

const ExercisePage = ({ id }) => {
  return (
    <ExercisesLayout>
      <ExerciseCell id={id} />
    </ExercisesLayout>
  );
};

export default ExercisePage;
