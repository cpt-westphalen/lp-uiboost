import appStoreApple from "../../../assets/app-store.svg";
import appStoreGoogle from "../../../assets/google-play.svg";

export const DownloadIcons = () => (
	<div className='flex flex-row w-full gap-3 items-center justify-evenly'>
		<a href='#'>
			<img
				src={appStoreApple}
				alt='Download via Apple App Store'
				className='min-w-32'
			/>
		</a>
		<a href='#'>
			<img
				src={appStoreGoogle}
				alt='Download via Google Play store'
				className='min-w-32'
			/>
		</a>
	</div>
);
