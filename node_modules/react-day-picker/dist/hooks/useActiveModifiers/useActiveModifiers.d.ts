import { ActiveModifiers } from '../../types/Modifiers';
/**
 * Return the active modifiers for the specified day.
 *
 * @param day
 * @param displayMonth The month where the date is displayed. If not the same as
 * `date`, the day is an "outside day".
 */
export declare function useActiveModifiers(day: Date, displayMonth?: Date): ActiveModifiers;
