import { Heading } from "../../components/Heading";
import { FlexWrap } from "../../components/Structures/FlexWrap";
import { IconItem } from "./IconItem";

import featuresImg from "../../assets/features-art.png";
import chatBalloonIcon from "../../assets/chat-balloon-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import threeLayersIcon from "../../assets/three-layers-icon.svg";
import starIcon from "../../assets/star-icon.svg";

export const FeaturesSection = () => (
	<FlexWrap className='px-6 items-center justify-center'>
		<FlexWrap className='max-w-2xl justify-center items-center gap-20'>
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
		</FlexWrap>
		<img
			src={featuresImg}
			alt=''
			loading='lazy'
			className='max-w-lg w-full'
		/>
	</FlexWrap>
);
