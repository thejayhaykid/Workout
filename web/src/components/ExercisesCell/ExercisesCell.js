import { Link, routes } from '@redwoodjs/router';

import Exercises from 'src/components/Exercises';

export const QUERY = gql`
  query EXERCISES {
    exercises {
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
      {'No exercises yet. '}
      <Link to={routes.newExercise()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Success = ({ exercises }) => {
  return <Exercises exercises={exercises} />;
};
