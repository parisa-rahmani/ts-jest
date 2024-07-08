import { randomInteger } from '../numberHelper';

describe('numberHelpers', () => {
  describe('randomInteger', () => {
    test('it should be return a random integer between min and max', () => {
      const min = 1;
      const max = 5;

      const result = randomInteger(min, max);

      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });
});
