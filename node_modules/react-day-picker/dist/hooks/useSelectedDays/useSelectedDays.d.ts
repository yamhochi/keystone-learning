import { DateRange } from '../../types/Matchers';
export declare type SelectedDays = Date | Date[] | DateRange | undefined;
/**
 * Return the current selected days when DayPicker is in selection mode.
 *
 * Days selected by the custom selection mode are not returned.
 */
export declare function useSelectedDays(): SelectedDays;
