import { isPrimitive } from '../typeHelper';

describe('typeHelper', () => {
  describe('isPrimitive Function', () => {
    test('returns false for non-primitive values', () => {
      const list = [{}, new Date(), Object({})];

      for (const el of list) {
        const result = isPrimitive(el);
        expect(result).toBeFalsy();
      }
    });

    test('returns true for all primitive values', () => {
      const list = [2, null, undefined, false, Symbol(10), BigInt('1')];

      for (const el of list) {
        const result = isPrimitive(el);
        expect(result).toBeTruthy();
      }
    });
  });
});
