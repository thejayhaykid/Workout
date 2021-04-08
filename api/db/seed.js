/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const data = require('./seed-data.json');

dotenv.config();
const db = new PrismaClient();

async function main() {
  const exWorkouts = await db.workout.findMany();
  const exExercises = await db.exercise.findMany();
  const exUsers = await db.user.findMany();

  const newWorkouts = data.workouts;
  const newExercises = data.exercises;
  const newUsers = data.users;

  // console.log(`Writing workouts: ${JSON.stringify(newWorkouts)}`)

  newWorkouts.forEach(async (workout) => {
    if (!exWorkouts.find((ex) => ex.title === workout.title)) {
      console.log(`Creating workout: ${JSON.stringify(workout)}`)
      const result = await db.workout.create({ data: workout });
      if (result.error) {
        throw new Error(
          `Error creating record!\nError: ${
            result.error
          }\nRecord: ${JSON.stringify(workout)}`,
        );
      }
    }
  });

  // console.log(`Writing exercises: ${JSON.stringify(newExercises)}`)

  newExercises.forEach(async (exercise) => {
    if (!exExercises.find((ex) => ex.title === exercise.title)) {
      console.log(`Creating exercise: ${JSON.stringify(exercise)}`)
      const result = await db.exercise.create({ data: exercise });
      if (result.error) {
        throw new Error(
          `Error creating record!\nError: ${
            result.error
          }\nRecord: ${JSON.stringify(exercise)}`,
        );
      }
    }
  });

  // console.log(`Writing users: ${JSON.stringify(newUsers)}`)

  newUsers.forEach(async (user) => {
    if (!exUsers.find((ex) => ex.title === user.title)) {
      console.log(`Creating user: ${JSON.stringify(user)}`)
      const result = await db.user.create({ data: user });
      if (result.error) {
        throw new Error(
          `Error creating record!\nError: ${
            result.error
          }\nRecord: ${JSON.stringify(user)}`,
        );
      }
    }
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    console.log(`Completed seed, disconnecting db`);
    await db.$disconnect();
  });
