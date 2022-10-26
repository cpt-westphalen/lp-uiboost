import { Heading } from "../Heading";
import { UnderlineCallout } from "../../svgs/UnderlineCallout";

export const Slogan = () => (
	<Heading
		title='O Boost para a sua carreira'
		desc='Ajudamos designers a se especializarem em UI design'>
		<h1 className='font-semibold lg:text-5xl text-2.5xl leading-8'>
			O{" "}
			<span className='text-pink relative'>
				Boost
				<UnderlineCallout
					color='#F974CC'
					width={"100%"}
					className='absolute bottom-[-2px] left-0 right-0'
				/>
			</span>{" "}
			para a sua carreira
		</h1>
	</Heading>
);
