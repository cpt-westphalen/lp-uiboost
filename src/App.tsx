import { ArrowDivider } from "./svgs/ArrowDivider";
import { FlexCenter } from "./components/Structures/FlexCenter";
import { Header } from "./components/Header";
import { OpeningSection } from "./components/OpeningSection";
import { Slogan } from "./components/Slogan";
import { Stats } from "./components/Stats";
import { UiBoostDivider } from "./components/Dividers/UiBoostDivider";

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
			</main>
		</>
	);
}

export default App;
