import { DownloadIcons } from "../../components/DownloadIcons";
import { Heading } from "../../components/Heading";
import { FlexWrap } from "../../components/Structures/FlexWrap";
import badge from "../../assets/rating-badge.png";

export const DownloadSection = () => (
	<FlexWrap className='px-6 justify-center 2xl:justify-between'>
		<div className='flex flex-col gap-12 lg:flex-shrink lg:basis-[780px]'>
			<Heading
				title='Facilitamos para que você aprenda design de interfaces a qualquer hora e lugar.'
				desc='Nós queremos te dar a praticidade de ter acesso a todas as aulas e mensagens na palma da mão para deixar você cada vez mais perto do seu sonho de ser um excelente ui designer.'>
				<h1 className='md:text-4xl'>
					Facilitamos para que você aprenda design de interfaces a
					qualquer hora e lugar.
				</h1>
			</Heading>
			<DownloadIcons />
		</div>
		<div className='flex justify-center items-center'>
			<img
				src={badge}
				className='aspect-square w-44 lg:w-52'
				loading='lazy'
			/>
		</div>
	</FlexWrap>
);
