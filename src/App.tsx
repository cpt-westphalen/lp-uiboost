import { FlexCenter } from "./components/Structures/FlexCenter";

import { FeaturesSection } from "./sections/FeaturesSection";
import { OpeningSection } from "./sections/OpeningSection";
import { TestimonialSection } from "./sections/TestimonialSection";

import { Header } from "./components/Header";
import { Slogan } from "./components/Slogan";
import { Stats } from "./components/Stats";

import { ArrowDivider } from "./svgs/ArrowDivider";
import { UiBoostDivider } from "./components/Dividers/UiBoostDivider";
import { EmptyDivider } from "./components/Dividers/EmptyDivider";

function App() {
	return (
		<>
			<Header />
			<main className='flex flex-col gap-10 items-center overflow-x-hidden'>
				<OpeningSection />
				<ArrowDivider
					className='h-14 mb-10'
					color='#F974CC'
					style={{ transform: "scaleY(-100%)" }}
				/>
				<FlexCenter className='px-6'>
					<Slogan />
					<Stats />
				</FlexCenter>
				<UiBoostDivider />
				<FeaturesSection />
				<EmptyDivider />
				<TestimonialSection />
				<EmptyDivider />
			</main>
		</>
	);
}

export default App;
