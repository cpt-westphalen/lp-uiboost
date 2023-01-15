import { Logo } from "../../svgs/Logo";
import { Menu } from "./Menu";

export const Header = () => (
	<header className='w-full h-[88px] border-b border-gray-150'>
		<div className='m-auto max-w-[1280px] flex flex-row justify-between items-center px-6 h-16 mb-8 mt-4'>
			<a href='#'>
				<Logo
					color='white'
					width={80}
				/>
			</a>
			<Menu />
		</div>
	</header>
);
