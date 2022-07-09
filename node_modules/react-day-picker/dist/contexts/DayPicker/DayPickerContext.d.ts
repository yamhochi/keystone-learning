import React, { ReactNode } from 'react';
import { DayPickerProps } from '../../DayPicker';
import { CaptionLayout } from '../../components/Caption';
import { DayPickerBase, DaySelectionMode } from '../../types/DayPickerBase';
import { DayPickerMultipleProps } from '../../types/DayPickerMultiple';
import { DayPickerRangeProps } from '../../types/DayPickerRange';
import { DayPickerSingleProps } from '../../types/DayPickerSingle';
import { Formatters } from '../../types/Formatters';
import { Labels } from '../../types/Labels';
import { Matcher } from '../../types/Matchers';
import { DayModifiers, ModifiersClassNames } from '../../types/Modifiers';
import { ClassNames, Styles } from '../../types/Styles';
/** The value of the [[DayPickerContext]]. */
export interface DayPickerContextValue extends DayPickerBase {
    mode: DaySelectionMode;
    onSelect?: DayPickerSingleProps['onSelect'] | DayPickerMultipleProps['onSelect'] | DayPickerRangeProps['onSelect'];
    required?: boolean;
    min?: number;
    max?: number;
    selected?: Matcher | Matcher[];
    captionLayout: CaptionLayout;
    classNames: Required<ClassNames>;
    formatters: Formatters;
    labels: Labels;
    locale: Locale;
    modifiersClassNames: ModifiersClassNames;
    modifiers: DayModifiers;
    numberOfMonths: number;
    styles: Styles;
    today: Date;
}
/**
 * The DayPicker Context shares the props passed to DayPicker within internal
 * and custom components. It is used to set the default values and perform
 * one-time calculations required to render the days.
 *
 * Developers may access this context from the [[useDayPicker]] hook when
 * using custom components.
 */
export declare const DayPickerContext: React.Context<DayPickerContextValue | undefined>;
/** The props for the [[DayPickerProvider]]. */
export interface DayPickerProviderProps {
    /** The initial props from the DayPicker component. */
    initialProps: DayPickerProps;
    children?: ReactNode;
}
/**
 * The provider for the [[DayPickerContext]], assigning the defaults from the
 * initial DayPicker props.
 */
export declare function DayPickerProvider(props: DayPickerProviderProps): JSX.Element;
