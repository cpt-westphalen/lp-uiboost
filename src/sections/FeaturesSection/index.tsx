import { Heading } from "../../components/Heading";
import { FlexWrap } from "../../components/Structures/FlexWrap";
import { IconItem } from "./IconItem";

import featuresImg from "../../assets/features-art.png";
import chatBalloonIcon from "../../assets/chat-balloon-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";
import threeLayersIcon from "../../assets/three-layers-icon.svg";
import starIcon from "../../assets/star-icon.svg";

export const FeaturesSection = () => (
	<FlexWrap>
		<Heading
			title='A Netflix tá diferente...'
			desc='Reunimos diversas funcionalidades em um app super prático para você estudar em qualquer lugar do planeta.'
		/>
		<FlexWrap>
			<ul className='flex flex-col gap-10'>
				<IconItem
					icon={downloadIcon}
					title={"Qualquer momento"}
					text={"Estude offline e aprenda o conteúdo a qualquer hora"}
				/>
				<IconItem
					icon={starIcon}
					title={"Seu progresso"}
					text={"Acompanhe seu progresso de estudos"}
				/>
				<IconItem
					icon={threeLayersIcon}
					title={"Módulos"}
					text={"Uma lista de aulas sobre vários temas"}
				/>
				<IconItem
					icon={chatBalloonIcon}
					title={"Mural"}
					text={
						"Um mural de recados pra você ficar por dentro do que tá rolando"
					}
				/>
			</ul>
			<img
				src={featuresImg}
				alt=''
			/>
		</FlexWrap>
	</FlexWrap>
);
