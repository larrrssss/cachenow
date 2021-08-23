import CacheNow from './index';

test('that it works correctly', () => {
  const animals = new CacheNow<number>();

  animals.set('dog', 40);

  expect(animals.get('dog')).toBe(40);
});

test('try to get an invalid entry', async () => {
  const animals = new CacheNow<number>(1 * 1000);

  animals.set('cat', 40);

  await new Promise((resolve) => setTimeout(resolve, 2 * 1000));

  expect(animals.get('cat')).toBe(null);
});

test('delete a key', () => {
  const animals = new CacheNow<number>(2 * 1000);

  animals.set('dog', 40);

  const deleted = animals.delete('dog');

  expect(deleted).toBe(40);

  expect(animals.get('dog')).toBe(null);
});