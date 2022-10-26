import divider from "../../../assets/uiboost-divider.svg";

export const UiBoostDivider = () => {
	return (
		<div className='h-20 my-8 bg-theme-linear w-full flex justify-center items-center overflow-hidden'>
			<div
				className='w-full h-full bg-repeat-x bg-center'
				style={{
					backgroundImage: `url('${divider}')`,
				}}></div>
		</div>
	);
};
