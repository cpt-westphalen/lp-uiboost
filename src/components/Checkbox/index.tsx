import { useEffect, useState } from "react";

export const Checkbox = ({ name }: { name: string }) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div>
			<div
				className={`text-white font-bold flex justify-center items-center h-4 w-4 border-2 border-pink-dark border-solid rounded hover:cursor-pointer ${
					isChecked ? "bg-pink-dark" : "hover:bg-gray-200"
				}`}>
				{isChecked && "✓"}
			</div>
			<input
				hidden
				type={"checkbox"}
				name={name}
				checked={isChecked}
				onChange={(e) => {
					setIsChecked(e.target.checked);
				}}
			/>
		</div>
	);
};
