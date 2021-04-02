export const schema = gql`
  type Workout {
    id: Int!
    title: String!
    description: String
    category: String
    focus: String
    dateAdded: DateTime!
    exercises: [Exercise]!
  }

  type Query {
    workouts: [Workout!]!
    workout(id: Int!): Workout
  }

  input CreateWorkoutInput {
    title: String!
    description: String
    category: String
    focus: String
    dateAdded: DateTime!
  }

  input UpdateWorkoutInput {
    title: String
    description: String
    category: String
    focus: String
    dateAdded: DateTime
  }

  type Mutation {
    createWorkout(input: CreateWorkoutInput!): Workout!
    updateWorkout(id: Int!, input: UpdateWorkoutInput!): Workout!
    deleteWorkout(id: Int!): Workout!
  }
`;
