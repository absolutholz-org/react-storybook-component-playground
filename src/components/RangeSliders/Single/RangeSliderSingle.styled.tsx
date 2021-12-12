import styled, { css } from 'styled-components';

export const RANGE_THUMB_HEIGHT = "2em";
export const RANGE_THUMB_WIDTH = "1em";
export const RANGE_TRACK_HEIGHT = "0.5em";

export const ThumbCss = css`
	appearance: none;
	background: white;
	border: 3px solid orange;
	border-radius: 50vmax;
	height: ${RANGE_THUMB_HEIGHT};
	margin-top: calc((${RANGE_TRACK_HEIGHT} / 2) - (${RANGE_THUMB_HEIGHT} / 2));
	width: ${RANGE_THUMB_WIDTH};
`;

export const TrackCss = css`
	background: lightgray;
	border-radius: 50vmax;
	height: ${RANGE_TRACK_HEIGHT};
`;

export const Input = styled.input`
	appearance: none;
	background: none;
	display: block;
	height: ${RANGE_THUMB_HEIGHT};
	width: 100%;

	&::-webkit-slider-runnable-track {
		${TrackCss}
	}

	&::-moz-range-track {
		${TrackCss}
	}

	&::-webkit-slider-thumb {
		${ThumbCss}
	}

	&::-moz-range-thumb {
		${ThumbCss}
	}
`;
