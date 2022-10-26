export const Heading = ({
	superTitle,
	title,
	desc,
	children,
}: {
	superTitle?: string;
	title: string;
	desc: string;
	children?: React.ReactNode;
}) => {
	return (
		<div className='flex flex-col gap-4'>
			<p className='text-sm font-medium'>{superTitle}</p>
			{(children && children) || <h1>{title}</h1>}
			<p>{desc}</p>
		</div>
	);
};
