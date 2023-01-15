import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { DropMenuIcon } from "../../../svgs/DropMenuIcon";

const menuItems = [
	{ text: "Sobre o curso", anchor: "#sobre" },
	{ text: "Depoimentos", anchor: "#depoimentos" },
];

type MenuProps = {
	className?: string;
};

export const Menu = ({ className }: MenuProps) => {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenuClick = (event?: React.MouseEvent) => {
		setShowMenu((s) => !s);
	};

	return (
		<div
			className={
				"w-full flex flex-row justify-end items-center gap-6 " +
					className ?? ""
			}>
			<div
				aria-hidden
				className={`${
					showMenu
						? "fixed top-28 bottom-0 left-0 right-0 bg-gray-100 bg-opacity-75"
						: "hidden"
				}`}
				onClick={handleMenuClick}
			/>

			<nav
				className='hidden lg:flex lg:flex-1 justify-center w-full'
				onBlur={() => handleMenuClick()}>
				<ul
					className={`flex flex-row gap-6 bg-gray-100 transition origin-top shadow-2xl rounded-b`}>
					{menuItems.map((item) => (
						<a href={item.anchor}>
							<li className='rounded font-medium text-lg'>
								{item.text}
							</li>
						</a>
					))}
				</ul>
			</nav>

			<div className='hidden sm:flex flex-col justify-center items-center font-medium '>
				<a href='#contato'>Dúvidas? Fale conosco ✌️</a>
			</div>
			<div className='block lg:hidden w-8'>
				<button onClick={handleMenuClick}>
					{showMenu ? (
						<IoMdClose
							color='white'
							size={32}
						/>
					) : (
						<DropMenuIcon
							color='white'
							width={36}
						/>
					)}
				</button>

				<nav
					className='absolute right-1 top-[84px] w-max'
					onBlur={() => handleMenuClick()}>
					<ul
						className={`flex flex-col bg-gray-100 transition origin-top shadow-2xl rounded-b ${
							showMenu ? "scale-y-100" : "scale-y-0"
						}`}>
						{menuItems.map((item) => (
							<a href={item.anchor}>
								<li className='hover:bg-gray-150 py-1 px-8 rounded font-medium text-lg'>
									{item.text}
								</li>
							</a>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};
