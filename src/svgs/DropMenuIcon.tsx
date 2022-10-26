import { SVGPropTypes } from "../types";

export const DropMenuIcon = ({
	color,
	style,
	className,
	width,
}: SVGPropTypes) => {
	return (
		<svg
			style={style}
			className={className}
			width={width || "40"}
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M8 20H32'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 13H32'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16 28L32 28'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
