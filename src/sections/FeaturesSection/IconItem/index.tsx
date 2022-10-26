type IconItemTypes = {
	icon: string;
	title: string;
	text: string;
};

export const IconItem = ({ icon, title, text }: IconItemTypes) => {
	return (
		<li className='flex flex-col text-center items-center gap-2'>
			<img
				src={icon}
				alt=''
			/>
			<h2 className='text-white text-xl xl:text-3xl font-medium xl:font-semibold font-poppins tracking-[-0.015em];'>
				{title}
			</h2>
			<p>{text}</p>
		</li>
	);
};
