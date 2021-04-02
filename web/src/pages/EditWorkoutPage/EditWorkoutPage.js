import WorkoutsLayout from 'src/layouts/WorkoutsLayout';
import EditWorkoutCell from 'src/components/EditWorkoutCell';

const EditWorkoutPage = ({ id }) => {
  return (
    <WorkoutsLayout>
      <EditWorkoutCell id={id} />
    </WorkoutsLayout>
  );
};

export default EditWorkoutPage;
