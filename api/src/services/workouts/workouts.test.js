import {
  workouts,
  workout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from './workouts';

describe('workouts', () => {
  scenario('returns all workouts', async (scenario) => {
    const result = await workouts();

    expect(result.length).toEqual(Object.keys(scenario.workout).length);
  });

  scenario('returns a single workout', async (scenario) => {
    const result = await workout({ id: scenario.workout.one.id });

    expect(result).toEqual(scenario.workout.one);
  });

  scenario('creates a workout', async (scenario) => {
    const result = await createWorkout({
      input: { title: 'String' },
    });

    expect(result.title).toEqual('String');
  });

  scenario('updates a workout', async (scenario) => {
    const original = await workout({ id: scenario.workout.one.id });
    const result = await updateWorkout({
      id: original.id,
      input: { title: 'String2' },
    });

    expect(result.title).toEqual('String2');
  });

  scenario('deletes a workout', async (scenario) => {
    const original = await deleteWorkout({ id: scenario.workout.one.id });
    const result = await workout({ id: original.id });

    expect(result).toEqual(null);
  });
});
