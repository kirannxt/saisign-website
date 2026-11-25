/**
 * Joins truthy class name strings into a single space-separated string.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
