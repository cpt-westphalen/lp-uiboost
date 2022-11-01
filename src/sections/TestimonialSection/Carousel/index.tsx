import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as PrimitiveCarousel } from "react-responsive-carousel";

export const Carousel = () => {
	return (
		<PrimitiveCarousel
			axis='horizontal'
			ariaLabel='Depoimentos'
			centerMode
			emulateTouch
			showThumbs={false}
			showArrows>
			{mockMonials.map((t) => {
				return (
					<div key={t.author}>
						<p>{t.text}</p>
						<img
							src={t.imgUrl}
							alt={""}
						/>
						<p>{t.author}</p>
						<p>{t.bio}</p>
					</div>
				);
			})}
		</PrimitiveCarousel>
	);
};

const mockMonials = [
	{
		text: "“Excelente curso, reconhecido no mercado com seu devido valor. O Gilberto é sempre atencioso todoas as vezes que necessito de um feedback”",
		author: "Maria Fernandes",
		bio: "Product Designer Jr na McAfee",
		imgUrl: "#",
	},
	{
		text: "“O uiBoost agregou muito em minha vida, consegue uma oportunidade de emprego melhor após a entrada no curso”",
		author: "Everton Cristian",
		bio: "UI Design Jr na Apple",
		imgUrl: "#",
	},
];
