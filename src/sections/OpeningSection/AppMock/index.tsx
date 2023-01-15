import smartphoneMock from "../../../assets/front-page-mobile.png";

export const AppMock = () => (
	<div className='lg:flex-1 max-w-lg mt-10'>
		<img
			src={smartphoneMock}
			alt='Visualization of the app home screen on a mobile device'
			loading='lazy'
		/>
	</div>
);
