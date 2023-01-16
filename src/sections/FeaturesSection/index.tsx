import { Heading } from "../../components/Heading";
import { IconItem } from "./IconItem";

import featuresImg from "../../assets/features-art.png";
import chatBalloonIcon from "../../assets/chat-balloon-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import threeLayersIcon from "../../assets/three-layers-icon.svg";
import starIcon from "../../assets/star-icon.svg";

export const FeaturesSection = () => (
	<div
		id='sobre'
		className='flex flex-col xl:flex-row xl:flex-wrap gap-10 mb-10 px-6 items-center justify-center'>
		<div className='flex flex-row flex-wrap mb-10 flex-1 justify-center items-center gap-20'>
			<Heading
				title='A Netflix tá diferente...'
				desc='Reunimos diversas funcionalidades em um app super prático para você estudar em qualquer lugar do planeta.'
			/>
			<ul className='flex flex-row flex-wrap justify-center items-center gap-12'>
				<IconItem
					icon={downloadIcon}
					title={"Qualquer momento"}
					text={"Estude offline e aprenda o conteúdo a qualquer hora"}
					size={42}
				/>
				<IconItem
					icon={starIcon}
					title={"Seu progresso"}
					text={"Acompanhe seu progresso de estudos"}
					size={38}
				/>
				<IconItem
					icon={threeLayersIcon}
					title={"Módulos"}
					text={"Uma lista de aulas sobre vários temas"}
					size={40}
				/>
				<IconItem
					icon={chatBalloonIcon}
					title={"Mural"}
					text={
						"Um mural de recados pra você ficar por dentro do que tá rolando"
					}
					size={38}
				/>
			</ul>
		</div>
		<img
			src={featuresImg}
			alt=''
			loading='lazy'
			className='max-w-lg w-full'
		/>
	</div>
);
