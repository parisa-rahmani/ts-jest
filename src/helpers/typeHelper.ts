export const isPrimitive = (value: any): boolean => {
  return (
    value === null ||
    value === undefined ||
    (typeof value !== 'function' && typeof value !== 'object')
  );
};
