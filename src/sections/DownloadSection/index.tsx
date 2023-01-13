import { DownloadIcons } from "../../components/DownloadIcons";
import { Heading } from "../../components/Heading";
import { FlexWrap } from "../../components/Structures/FlexWrap";
import badge from "../../assets/rating-badge.png";

export const DownloadSection = () => (
	<FlexWrap className='px-6 justify-center gap-14'>
		<div className='flex flex-col gap-12'>
			<Heading
				title='Facilitamos para que você aprenda design de interfaces a qualquer hora e lugar.'
				desc='Nós queremos te dar a praticidade de ter acesso a todas as aulas e mensagens na palma da mão para deixar você cada vez mais perto do seu sonho de ser um excelente ui designer.'
			/>
			<DownloadIcons />
		</div>
		<img
			src={badge}
			className='aspect-square w-44'
		/>
	</FlexWrap>
);
