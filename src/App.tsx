import { ArrowDivider } from "./svgs/ArrowDivider";
import { FlexCenter } from "./components/Structures/FlexCenter";
import { Header } from "./components/Header";
import { OpeningSection } from "./sections/OpeningSection";
import { Slogan } from "./components/Slogan";
import { Stats } from "./components/Stats";
import { UiBoostDivider } from "./components/Dividers/UiBoostDivider";
import { BenefitsSection } from "./sections/BenefitsSection";

function App() {
	return (
		<>
			<Header />
			<main className='flex flex-col gap-10 items-center'>
				<OpeningSection />
				<ArrowDivider
					className='h-14 mb-10'
					color='#F974CC'
					style={{ transform: "scaleY(-100%)" }}
				/>
				<FlexCenter>
					<Slogan />
					<Stats />
				</FlexCenter>
				<UiBoostDivider />
				<BenefitsSection />
			</main>
		</>
	);
}

export default App;
