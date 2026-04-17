/**
 * @param iterable Iterable with values to sum.
 * @example
 * ```ts
 * const total = sum([1, 2, 3]);
 * ```
 */
export function sum(iterable: Iterable<number>): number {
  let total = 0;

  for (const value of iterable) {
    total += value;
  }

  return total;
}
