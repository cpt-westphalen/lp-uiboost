export const FlexWrap = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={`flex flex-row flex-wrap gap-10 mb-10 ${className}`}>
			{children}
		</div>
	);
};
