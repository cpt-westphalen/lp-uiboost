type IconItemTypes = {
	icon: string;
	title: string;
	text: string;
	size: number;
};

export const IconItem = ({ icon, title, text, size }: IconItemTypes) => {
	return (
		<li className='flex flex-col text-center items-center gap-2 flex-grow-0 flex-shrink basis-64'>
			<img
				src={icon}
				alt=''
				height={size}
				width={size}
				className='mb-2'
			/>
			<h2>{title}</h2>
			<p className='w-56'>{text}</p>
		</li>
	);
};
