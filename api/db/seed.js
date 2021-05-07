/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const data = require('./seed-data.json');

dotenv.config();
const db = new PrismaClient();

async function main() {
  const exWorkouts = await db.workout.findMany();

  const newWorkouts = data.workouts;

  newWorkouts.forEach(async (workout) => {
    if (!exWorkouts.find((ex) => ex.title === workout.title)) {
      console.log(`Creating workout: ${JSON.stringify(workout)}`);
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
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    console.log(`Completed seed, disconnecting db`);
    await db.$disconnect();
  });
