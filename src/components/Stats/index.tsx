import { FlexWrap } from "../Structures/FlexWrap";

import students from "../../assets/students-number.svg";
import mentorship from "../../assets/mentorship-hours-number.svg";
import hours from "../../assets/hours-number.svg";

export const Stats = () => (
	<FlexWrap className='justify-center items-center'>
		<NumberStats
			src={students}
			alt={"Mais de 300"}
			text={"Alunos com certificações"}
		/>
		<NumberStats
			src={hours}
			alt={"Mais de 60"}
			text={"Horas de conteúdo gravado"}
		/>
		<NumberStats
			src={mentorship}
			alt={"Mais de 5"}
			text={"Horas de mentoria por turma"}
		/>
	</FlexWrap>
);
const NumberStats = ({
	src,
	alt,
	text,
}: {
	src: string;
	alt: string;
	text: string;
}) => {
	return (
		<div className='flex flex-col gap-4 justify-center items-center'>
			<div className='flex flex-row flex-nowrap gap-4 w-fit items-center'>
				<img
					src={src}
					alt={alt}
					className='max-h-[72px]'
				/>
				<span className='text-theme-gradient'>+</span>
			</div>
			<p className='text-white'>{text}</p>
		</div>
	);
};
