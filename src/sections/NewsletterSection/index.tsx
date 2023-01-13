import { FiMail } from "react-icons/fi";
import { FlexCenter } from "../../components/Structures/FlexCenter";
import { Checkbox } from "../../components/Checkbox";
import { AgreeCheckbox } from "./AgreeCheckbox";

export const NewsletterSection = () => {
	return (
		<FlexCenter className='px-5 py-8'>
			<div className='flex flex-col gap-2 justify-center items-center px-4 py-8 bg-gray-150 rounded-lg'>
				<div className='mb-4 flex flex-col items-center'>
					<div className='flex gap-4'>
						<FiMail size={30} />
						<h2>Receba as novidades</h2>
					</div>
					<p>Inscreva-se e receba as novidades no seu e-mail.</p>
				</div>
				<form className='flex flex-col gap-2'>
					<input
						type='text'
						placeholder='Insira seu e-mail'
						className='h-14 w-full rounded px-4 text-gray-200'
					/>

					<AgreeCheckbox />
					<button className='w-full bg-pink-dark hover:bg-pink active:bg-pink-dark h-14 rounded font-bold mt-4'>
						Assinar agora
					</button>
				</form>
			</div>
		</FlexCenter>
	);
};
