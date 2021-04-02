import {
  exercises,
  exercise,
  createExercise,
  updateExercise,
  deleteExercise,
} from './exercises';

describe('exercises', () => {
  scenario('returns all exercises', async (scenario) => {
    const result = await exercises();

    expect(result.length).toEqual(Object.keys(scenario.exercise).length);
  });

  scenario('returns a single exercise', async (scenario) => {
    const result = await exercise({ id: scenario.exercise.one.id });

    expect(result).toEqual(scenario.exercise.one);
  });

  scenario('creates a exercise', async (scenario) => {
    const result = await createExercise({
      input: { title: 'String' },
    });

    expect(result.title).toEqual('String');
  });

  scenario('updates a exercise', async (scenario) => {
    const original = await exercise({ id: scenario.exercise.one.id });
    const result = await updateExercise({
      id: original.id,
      input: { title: 'String2' },
    });

    expect(result.title).toEqual('String2');
  });

  scenario('deletes a exercise', async (scenario) => {
    const original = await deleteExercise({ id: scenario.exercise.one.id });
    const result = await exercise({ id: original.id });

    expect(result).toEqual(null);
  });
});
