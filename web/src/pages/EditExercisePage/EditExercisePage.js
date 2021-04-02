import ExercisesLayout from 'src/layouts/ExercisesLayout';
import EditExerciseCell from 'src/components/EditExerciseCell';

const EditExercisePage = ({ id }) => {
  return (
    <ExercisesLayout>
      <EditExerciseCell id={id} />
    </ExercisesLayout>
  );
};

export default EditExercisePage;
