import React, { ReactNode } from 'react';
/** Represents the value of the [[NavigationContext]]. */
export interface NavigationContextValue {
    /** The month to display in the calendar. Note that when `numberOfMonths > 1` represent the first month in the displayed months. */
    currentMonth: Date;
    /** The months rendered by DayPicker. DayPicker can render one than one month via `numberOfMonths`. */
    displayMonths: Date[];
    /** Navigate to the specified month. */
    goToMonth: (month: Date) => void;
    /** Navigate to the specified date. */
    goToDate: (date: Date, refDate?: Date) => void;
    /** The next month to display. `undefined` if no months left */
    nextMonth?: Date;
    /** The previous month to display. `undefined` if no months left */
    previousMonth?: Date;
    /** Return true if the day is currently included in the months displayed in the calendar. */
    isDateDisplayed: (day: Date) => boolean;
}
/**
 * The Navigation context shares details about the months being navigated in DayPicker.
 *
 * Access this context from the [[useNavigation]] hook.
 */
export declare const NavigationContext: React.Context<NavigationContextValue | undefined>;
/** Provides the values for the [[NavigationContext]]. */
export declare function NavigationProvider(props: {
    children?: ReactNode;
}): JSX.Element;
