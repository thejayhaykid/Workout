import WorkoutsLayout from 'src/layouts/WorkoutsLayout';
import WorkoutCell from 'src/components/WorkoutCell';

const WorkoutPage = ({ id }) => {
  return (
    <WorkoutsLayout>
      <WorkoutCell id={id} />
    </WorkoutsLayout>
  );
};

export default WorkoutPage;
