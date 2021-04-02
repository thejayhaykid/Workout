import { Link, routes } from '@redwoodjs/router';

import Workouts from 'src/components/Workouts';

export const QUERY = gql`
  query WORKOUTS {
    workouts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No workouts yet. '}
      <Link to={routes.newWorkout()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Success = ({ workouts }) => {
  return <Workouts workouts={workouts} />;
};
