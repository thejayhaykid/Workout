/*
  Warnings:

  - You are about to drop the `Exercise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ExerciseToWorkout` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Workout" ADD COLUMN "exercises" TEXT;
ALTER TABLE "Workout" ADD COLUMN "warmUp" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Exercise";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ExerciseToWorkout";
PRAGMA foreign_keys=on;
