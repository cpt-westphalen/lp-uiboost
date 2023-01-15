import appStoreApple from "../../assets/app-store.svg";
import appStoreGoogle from "../../assets/google-play.svg";

export const DownloadIcons = () => (
	<div className='flex flex-row w-full gap-6 items-center justify-start'>
		<a href='#'>
			<img
				src={appStoreApple}
				alt='Download via Apple App Store'
				className='w-40'
			/>
		</a>
		<a href='#'>
			<img
				src={appStoreGoogle}
				alt='Download via Google Play store'
				className='w-40'
			/>
		</a>
	</div>
);
