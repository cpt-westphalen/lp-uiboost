import { Carousel } from "./Carousel";

import { FaChevronRight } from "react-icons/fa";

import { avatars } from "./avatars";

export const TestimonialSection = () => (
	<div
		id='depoimentos'
		className='flex flex-col justify-center text-center w-full px-6 gap-4'>
		<h2 className='font-semibold text-3xl'>
			O que alguns dos nossos alunos estão falando
		</h2>
		<p>Alguns feedbacks de alunos que já passaram pelo curso</p>
		<div className='mt-4 flex flex-row flex-nowrap justify-center items-center'>
			{avatars.map((a: string) => (
				<img
					src={a}
					alt=''
					className='ml-[-5px]'
					loading='lazy'
				/>
			))}
			<span className='mx-2 font-medium text-white'>+2.000 alunos</span>
		</div>
		<a
			href='#'
			className='mb-12 text-pink self-center flex flex-row gap-2 justify-center items-center'>
			<p className='text-lg font-semibold'>Quero ser ui Boost</p>
			<FaChevronRight size={16} />
		</a>
		<Carousel />
	</div>
);
