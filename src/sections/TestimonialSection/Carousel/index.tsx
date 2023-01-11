import { useState } from "react";
import a403 from "../../../assets/avatar-403.png";

type CarouselType = {
	text: string;
	author: string;
	bio: string;
	imgUrl: string;
};

const mockMonials = [
	{
		text: "“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todas as vezes que necessito de um feedback”",
		author: "Maria Fernandes",
		bio: "Product Designer Jr na McAfee",
		imgUrl: a403,
	},
	{
		text: "“O uiBoost agregou muito em minha vida, consegue uma oportunidade de emprego melhor após a entrada no curso”",
		author: "Everton Cristian",
		bio: "UI Design Jr na Apple",
		imgUrl: a403,
	},
	{
		text: "“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todas as vezes que necessito de um feedback”",
		author: "Maria Lourdes",
		bio: "Product Designer Jr na McAfee",
		imgUrl: a403,
	},
];

export const Carousel = ({ carousel }: { carousel?: CarouselType[] }) => {
	return <DynamicCarousel carousel={carousel ?? mockMonials} />;
};

const DynamicCarousel = ({ carousel }: { carousel: CarouselType[] }) => {
	const [focusIndex, setFocusIndex] = useState(
		Math.floor(carousel.length / 2)
	);
	return (
		<div className='flex flex-col self-center max-w-full w-80 overflow-x-visible h-fit'>
			<ul
				style={{
					transform: `translateX(-${
						focusIndex * (100 / carousel.length)
					}%)`,
				}}
				className='flex flex-row w-max overflow-x-visible transition ease-in-out relative'>
				{carousel.map((t, i) => {
					return (
						<li
							key={t.author}
							onClick={() =>
								focusIndex !== i ? setFocusIndex(i) : false
							}
							className={""}>
							<div
								className={`${
									i !== focusIndex
										? "scale-90 hover:bg-gray-300 hover:bg-opacity-30"
										: ""
								} w-80 h-full flex flex-col gap-4 px-2 py-4 bg-gray-200 bg-opacity-20 rounded-md transition`}>
								<p className='text-sm text-center'>{t.text}</p>
								<div className='flex flex-row justify-center items-center gap-3 justify-self-end flex-grow'>
									<img
										src={t.imgUrl}
										alt={"img"}
										className='h-10 flex-grow-0 flex-shrink-0 basis-10'
									/>
									<div className='text-start'>
										<p className='font-semibold'>
											{t.author}
										</p>
										<p className='text-gray-800 text-sm'>
											{t.bio}
										</p>
									</div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
			<div className='flex justify-center items-center gap-6 my-4'>
				<button
					onClick={() => {
						focusIndex === 0
							? setFocusIndex(carousel.length - 1)
							: setFocusIndex((i) => i - 1);
					}}
					className='font-bold bg-gray-200 opacity-20 hover:opacity-100 w-8 h-8 p-0 m-0 flex justify-center items-center rounded-full transition'>
					{"<"}
				</button>
				<button
					onClick={() => {
						focusIndex === carousel.length - 1
							? setFocusIndex(0)
							: setFocusIndex((i) => i + 1);
					}}
					className='font-bold bg-gray-200 opacity-20 hover:opacity-100 w-8 h-8 p-0 m-0 flex justify-center items-center rounded-full transition'>
					{">"}
				</button>
			</div>
		</div>
	);
};
