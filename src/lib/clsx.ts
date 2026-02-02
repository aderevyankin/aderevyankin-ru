type ClassValue = string | number | null | undefined | false | ClassObject;
type ClassObject = Record<string, boolean | null | undefined>;

/**
 * Утилита для условного объединения имен классов.
 *
 * @example
 * // Простое объединение
 * clsx('btn', 'btn-primary') // → "btn btn-primary"
 *
 * @example
 * // Условные классы
 * clsx('btn', isActive && 'btn-active') // → "btn btn-active" или "btn"
 *
 * @example
 * // Объект с условиями
 * clsx('btn', { 'btn-active': isActive, 'btn-disabled': disabled })
 */
export const clsx = (...args: ClassValue[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
};
