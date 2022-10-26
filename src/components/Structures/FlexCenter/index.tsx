type FlexCenterTypes = {
	children: React.ReactNode;
	className?: string;
};

export const FlexCenter = ({ children, className }: FlexCenterTypes) => (
	<div
		className={`flex flex-col justify-center text-center gap-10 ${className}`}>
		{children}
	</div>
);
