import { IRangeSliderProps } from "../IRangeSlider";

export interface IRangeSliderSingleProps extends IRangeSliderProps {
    defaultValue: number;

    onValueChange?: (event: React.FormEvent) => void;
}
