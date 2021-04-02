import Workout from 'src/components/Workout';

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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Workout not found</div>;

export const Success = ({ workout }) => {
  return <Workout workout={workout} />;
};
