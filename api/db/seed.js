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

  newWorkouts.forEach(async (workout) => {
    if (!exWorkouts.find((ex) => ex.title === workout.title)) {
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

  newExercises.forEach(async (exercise) => {
    if (!exExercises.find((ex) => ex.title === exercise.title)) {
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

  newUsers.forEach(async (user) => {
    if (!exUsers.find((ex) => ex.title === user.title)) {
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
