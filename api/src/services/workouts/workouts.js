import { requireAuth } from 'src/lib/auth';
import { db } from 'src/lib/db';

export const workouts = () => {
  return db.workout.findMany();
};

export const workout = ({ id }) => {
  return db.workout.findUnique({
    where: { id },
  });
};

export const createWorkout = ({ input }) => {
  requireAuth();
  return db.workout.create({
    data: input,
  });
};

export const updateWorkout = ({ id, input }) => {
  requireAuth();
  return db.workout.update({
    data: input,
    where: { id },
  });
};

export const deleteWorkout = ({ id }) => {
  requireAuth();
  return db.workout.delete({
    where: { id },
  });
};

export const Workout = {
  exercises: (_obj, { root }) =>
    db.workout.findUnique({ where: { id: root.id } }).exercises(),
};
