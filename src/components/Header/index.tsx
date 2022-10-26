import { DropMenuIcon } from "../../svgs/DropMenuIcon";
import { Logo } from "../../svgs/Logo";

export const Header = () => (
	<header className='flex flex-row justify-between items-center px-6 w-full h-16 mb-8 mt-4'>
		<Logo
			color='white'
			width={80}
		/>
		<button>
			<DropMenuIcon
				color='white'
				width={36}
			/>
		</button>
	</header>
);
