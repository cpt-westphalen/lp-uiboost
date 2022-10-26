import { SVGPropTypes } from "../types";

export const UnderlineCallout = ({
	color,
	style,
	className,
	width,
}: SVGPropTypes) => (
	<svg
		aria-hidden
		style={style}
		className={className}
		width={width || "300"}
		viewBox='0 0 300 33'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M1.59863 21.628C70.8873 8.59701 181.335 -0.263348 298 2.50892'
			stroke={color}
			strokeWidth='3'
			strokeLinecap='round'
		/>
		<path
			d='M95.1272 29.704C128.548 24.1396 212.979 13.9586 283.335 17.7493'
			stroke={color}
			strokeWidth='3'
			strokeLinecap='round'
		/>
	</svg>
);
