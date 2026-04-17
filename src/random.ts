import { randomInt } from "node:crypto";

/**
 * @param min Start of a range, inclusive.
 * @param max End of a range, inclusive.
 * @returns Random integer between min and max.
 * @example
 * ```ts
 * const dice = rii(1, 6);
 * ```
 */
export function rii(min: number, max: number): number | null {
  if (Number.isNaN(min) || Number.isNaN(max)) {
    return null;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return randomInt(min, max + 1);
}
