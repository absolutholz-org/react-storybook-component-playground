import { IRangeSliderProps } from "../IRangeSlider";

interface IOnChangeArguments {
    lowValue: number;
    highValue: number;
}

export interface IRangeSliderDoubleProps extends IRangeSliderProps {
	defaultValueHigh: number;

	defaultValueLow: number;

	initialLowValue: number;

	initialHighValue: number;

	onChange: ({ lowValue, highValue }: IOnChangeArguments) => void;
}
