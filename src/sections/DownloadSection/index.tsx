import { DownloadIcons } from "../../components/DownloadIcons";
import { Heading } from "../../components/Heading";
import badge from "../../assets/rating-badge.png";

export const DownloadSection = () => (
	<div className='flex flex-row flex-wrap gap-10 mb-10 max-w-6xl px-6 justify-center 2xl:justify-between'>
		<div className='flex flex-col gap-12 lg:flex-shrink lg:basis-[780px]'>
			<Heading
				title='Facilitamos para que você aprenda design de interfaces a qualquer hora e lugar.'
				desc='Nós queremos te dar a praticidade de ter acesso a todas as aulas e mensagens na palma da mão para deixar você cada vez mais perto do seu sonho de ser um excelente UI designer.'>
				<h2 className='text-4xl font-semibold'>
					Facilitamos para que você aprenda design de interfaces a
					qualquer hora e lugar.
				</h2>
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
	</div>
);
