import { FiMail } from "react-icons/fi";
import { AgreeCheckbox } from "./AgreeCheckbox";

export const NewsletterSection = () => {
	return (
		<div className='flex flex-col justify-center w-full'>
			<div className='flex flex-col justify-center items-center flex-1 mx-4 px-4 py-8 bg-gray-150 rounded-lg min-h-[208px] '>
				<div className='flex flex-row flex-wrap gap-2 lg:justify-start justify-center items-start lg:gap-24'>
					<div className='mb-4 flex flex-col items-center md:items-start'>
						<div className='flex gap-4 items-center'>
							<FiMail
								size={30}
								className='lg:text-pink'
							/>
							<h2 className='lg:font-semibold'>
								Receba as novidades
							</h2>
						</div>
						<p>Inscreva-se e receba as novidades no seu e-mail.</p>
					</div>
					<form className='lg:flex-1 flex flex-row flex-wrap gap-2 md:pt-1'>
						<div className='flex flex-col gap-2 flex-1'>
							<input
								type='text'
								placeholder='Insira seu e-mail'
								className='h-14 w-full rounded px-4 text-gray-200'
							/>

							<AgreeCheckbox />
						</div>
						<button className='w-full lg:w-40 bg-pink-dark hover:bg-pink active:bg-pink-dark h-14 rounded font-bold mt-4 lg:mt-0 text-white'>
							Assinar agora
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
