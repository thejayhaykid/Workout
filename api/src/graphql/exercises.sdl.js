export const schema = gql`
  type Exercise {
    id: Int!
    title: String!
    description: String
    category: String
    focus: String
    dateAdded: DateTime!
    Workouts: [Workout]!
  }

  type Query {
    exercises: [Exercise!]!
    exercise(id: Int!): Exercise
  }

  input CreateExerciseInput {
    title: String!
    description: String
    category: String
    focus: String
    dateAdded: DateTime!
  }

  input UpdateExerciseInput {
    title: String
    description: String
    category: String
    focus: String
    dateAdded: DateTime
  }

  type Mutation {
    createExercise(input: CreateExerciseInput!): Exercise!
    updateExercise(id: Int!, input: UpdateExerciseInput!): Exercise!
    deleteExercise(id: Int!): Exercise!
  }
`;
