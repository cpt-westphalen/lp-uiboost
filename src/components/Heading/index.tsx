export const Heading = ({
	id,
	superTitle,
	title,
	desc,
	children,
}: {
	id?: string;
	superTitle?: string;
	title: string;
	desc: string;
	children?: React.ReactNode;
}) => {
	return (
		<div className='flex flex-col gap-4'>
			<p className='text-sm font-medium'>{superTitle}</p>
			{(children && children) || <h1 id={id}>{title}</h1>}
			<p>{desc}</p>
		</div>
	);
};
