import React, { useRef, useState } from 'react';

import * as S from './RangeSliderSingle.styled';
import { IRangeSliderSingleProps } from './IRangeSliderSingle';

export default function RangeSliderSingle({ max, min = 0, step = 1, defaultValue = 0, onValueChange, ...props }: IRangeSliderSingleProps): JSX.Element {
	return (
		<S.Input
			defaultValue={defaultValue}
			max={max}
			min={min}
			onInput={onValueChange}
			step={step}
			type="range"
			{...props}
		/>
	);
}
