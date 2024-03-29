import { DownloadSection } from "./sections/DownloadSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { OpeningSection } from "./sections/OpeningSection";
import { TestimonialSection } from "./sections/TestimonialSection";

import { Header } from "./components/Header";
import { Slogan } from "./components/Slogan";
import { Stats } from "./components/Stats";

import { ArrowDivider } from "./svgs/ArrowDivider";
import { EmptyDivider } from "./components/Dividers/EmptyDivider";
import { UiBoostDivider } from "./components/Dividers/UiBoostDivider";

import { FaChevronUp } from "react-icons/fa";

function App() {
	return (
		<>
			<Header />

			<main className='overflow-x-hidden'>
				<div className='max-w-[1280px] m-auto flex flex-col gap-10 xl:mb-32 lg:mt-24 items-center overflow-x-hidden'>
					<OpeningSection />
					<ArrowDivider
						className='h-14 mb-10'
						color='#F974CC'
						style={{ transform: "scaleY(-100%)" }}
					/>
					<div className='flex flex-col justify-center text-center gap-10 px-6'>
						<Slogan />
						<Stats />
					</div>
				</div>
				<UiBoostDivider />
				<div className='flex flex-col xl:mt-40 gap-10 items-center overflow-x-hidden max-w-[1280px] m-auto'>
					<FeaturesSection />
					<EmptyDivider size={14} />
				</div>
				<TestimonialSection />
				<div className='flex flex-col xl:mt-40 gap-10 items-center overflow-x-hidden max-w-[1280px] m-auto'>
					<EmptyDivider size={8} />
					<DownloadSection />
					<div className='my-20 w-full'>
						<NewsletterSection />
					</div>
					<a
						href='#'
						className='px-6 flex w-full justify-end gap-3 items-center hover:cursor-pointer'>
						<p>Voltar ao topo</p>
						<FaChevronUp />
					</a>
					<EmptyDivider size={2} />
				</div>
			</main>
		</>
	);
}

export default App;
