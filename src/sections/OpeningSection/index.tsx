import { AppMock } from "./AppMock";
import { DownloadIcons } from "./DownloadIcons";
import { Heading } from "../../components/Heading";
import { FlexWrap } from "../../components/Structures/FlexWrap";

export const OpeningSection = () => (
	<FlexWrap className='px-6'>
		<Heading
			superTitle='Exclusivos para alunos uiBoost 📏'
			title='Estude design até em outra galáxia'
			desc='Baixe o app do uiBoost e tenha acesso a todo o conteúdo do curso
			uiBoost na palma da sua mão, mesmo estando offline. Aprenda de
			qualquer lugar e a qualquer hora.'>
			<h1>
				Estude design até em outra{" "}
				<span className='text-pink'>galáxia</span>
			</h1>
		</Heading>
		<DownloadIcons />
		<AppMock />
	</FlexWrap>
);
