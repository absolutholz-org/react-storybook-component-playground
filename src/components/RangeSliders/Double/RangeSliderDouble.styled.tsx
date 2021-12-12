import styled, { css } from 'styled-components';
import RangeSliderSingle from '../Single/RangeSliderSingle';
import { RANGE_TRACK_HEIGHT }from '../Single/RangeSliderSingle.styled';

export const InputWrapper = styled.div`
	position: relative;
`;

export const InputLowerLimit = styled(RangeSliderSingle)``;

const TrackCss = css`
	background: none;
	height: 0;
`;

export const InputUpperLimit = styled(RangeSliderSingle)`
	height: 0;
	left: 0;
	position: absolute;
	top: 50%;

	&::-webkit-slider-thumb {
		transform: translateY(calc(${RANGE_TRACK_HEIGHT} / -2));
	}

	&::-moz-range-thumb {
	}

	&::-webkit-slider-runnable-track {
		${TrackCss}
	}

	&::-moz-range-track {
		${TrackCss}
	}

	&::-moz-range-progress {
		${TrackCss}
	}
`;
