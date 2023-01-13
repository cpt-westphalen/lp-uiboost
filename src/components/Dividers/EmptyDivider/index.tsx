type EmptyDividerProps = {
	size: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
};

//`h-${size ?? 24} sm:h-32 w-full`
export const EmptyDivider = ({ size, sm, md, lg, xl }: EmptyDividerProps) => (
	<div
		className={`w-full h-${size} ${sm ? "sm:h-" + sm : ""} ${
			md ? "md:h-" + md : ""
		} ${lg ? "lg:h-" + lg : ""} ${xl ? "xl:h-" + xl : ""}`}></div>
);
