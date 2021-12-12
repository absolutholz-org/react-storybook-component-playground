import React, { useRef, useState } from 'react';

import * as S from './RangeSliderDouble.styled';
import { IRangeSliderDoubleProps } from './IRangeSliderDouble';

export default function RangeSliderDouble({
	defaultValueHigh,
	defaultValueLow,
	initialLowValue,
	initialHighValue,
	max,
	min = 0,
	onChange,
	step = 1,
	...props
}: IRangeSliderDoubleProps): JSX.Element {
	const refLowerLimit = useRef<HTMLInputElement>(null);
	const refUpperLimit = useRef<HTMLInputElement>(null);

	const handleInput = (event: React.FormEvent) => {
		if (refLowerLimit?.current && refUpperLimit?.current) {

			const lowerLimitValue = +refLowerLimit.current.value;
			const upperLimitValue = +refUpperLimit.current.value;
			
			if (lowerLimitValue > upperLimitValue) {
				if (event.target === refLowerLimit.current) {
					refUpperLimit.current.value = lowerLimitValue.toString();
				} else if (event.target === refUpperLimit.current) {
					refLowerLimit.current.value = upperLimitValue.toString();
				}
			}
			
			onChange({
				lowValue: +refLowerLimit.current.value,
				highValue: +refUpperLimit.current.value
			});
		}
	};

	return (
		<S.InputWrapper>
			{/* <S.InputLowerLimit
				defaultValue={defaultValueLow}
				max={max}
				min={min}
				onValueChange={handleInput}
				ref={refLowerLimit}
				step={step}
				type="range"
				{...props}
			/>
			<S.InputUpperLimit
				defaultValue={defaultValueHigh}
				max={max}
				min={min}
				onValueChange={handleInput}
				ref={refUpperLimit}
				step={step}
				type="range"
				{...props}
			/> */}
		</S.InputWrapper>
	);
}
