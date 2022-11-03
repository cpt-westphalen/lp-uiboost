import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as PrimitiveCarousel } from "react-responsive-carousel";
import { useMemo } from "react";
import a403 from "../../../assets/avatar-403.png";

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
		imgUrl: "#",
	},
	{
		text: "“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todas as vezes que necessito de um feedback”",
		author: "Maria Fernandes",
		bio: "Product Designer Jr na McAfee",
		imgUrl: a403,
	},
];

export const Carousel = () => {
	return (
		<PrimitiveCarousel
			axis='horizontal'
			ariaLabel='Depoimentos'
			showArrows
			showThumbs={false}
			showIndicators={false}
			dynamicHeight={false}
			centerMode
			width={"100%"}>
			{mockMonials.map((t) => {
				return (
					<div
						key={t.author}
						className='px-6 py-4 bg-gray-200 bg-opacity-20 rounded-md'>
						<p className='text-lg max-w-fit'>{t.text}</p>
						<div className='flex flex-row items-center gap-4'>
							<img
								src={t.imgUrl}
								alt={"img"}
								className='h-10 w-10 flex-grow-0 flex-shrink-0 basis-10'
							/>
							<div>
								<p className='font-semibold text-lg'>
									{t.author}
								</p>
								<p className='text-gray-800'>{t.bio}</p>
							</div>
						</div>
					</div>
				);
			})}
		</PrimitiveCarousel>
	);
};
