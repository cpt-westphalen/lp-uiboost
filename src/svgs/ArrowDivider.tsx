import { SVGPropTypes } from "../types";

export const ArrowDivider = ({ color, style, className }: SVGPropTypes) => {
	return (
		<svg
			style={style}
			className={className}
			width='70'
			height='100'
			viewBox='0 0 70 100'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M34.8611 99.5266V0.250183'
				stroke={color}
				strokeWidth='3'
			/>
			<path
				d='M35.1108 0C35.1108 10.1667 41.9608 31.55 69.3609 35.7501'
				stroke={color}
				strokeWidth='3'
			/>
			<path
				d='M34.6104 0C34.6104 10.1667 27.7604 31.55 0.360368 35.7501'
				stroke={color}
				strokeWidth='3'
			/>
		</svg>
	);
};
