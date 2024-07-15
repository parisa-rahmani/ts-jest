import { boil } from '../arrayHelper';

describe('boil function', () => {
  test('compares and keeps item based on condition', () => {
    const list = [
      { game: 'a', score: 100 },
      { game: 'b', score: 200 },
      { game: 'c', score: 300 },
      { game: 'd', score: 400 },
      { game: 'e', score: 500 },
    ];
    const result = boil(list, (a, b) => (a.score > b.score ? a : b));
    expect(result?.game).toBe('e');
    expect(result?.score).toBe(500);
  });
  test('does not fail when provided array is empty', () => {
    const result = boil([], () => true);
    expect(result).toBeNull();
  });
  test('does not fail when provided array is null', () => {
    const result = boil(null as unknown as readonly boolean[], () => true);
    expect(result).toBeNull();
  });
  test('does not fail when provided array is funky shaped', () => {
    const result = boil({} as any, () => true);
    expect(result).toBeNull();
  });
});
