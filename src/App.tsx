import { SVGPropTypes } from "./types";
import smartphoneMock from "./assets/front-page-mobile.png";
import appStoreApple from "./assets/app-store.svg";
import appStoreGoogle from "./assets/google-play.svg";
import students from "./assets/students-number.svg";
import hours from "./assets/hours-number.svg";
import mentorship from "./assets/mentorship-hours-number.svg";

function App() {
	return (
		<div>
			<div className='h-[44px]'>status bar</div>
			<header className='flex flex-row justify-between items-center px-6 w-full h-16 mb-14'>
				<Logo
					color='white'
					width={80}
				/>
				<button>
					<DropMenuIcon
						color='white'
						width={36}
					/>
				</button>
			</header>
			<main className='px-6 flex flex-col gap-10 items-center'>
				<div className='flex flex-row flex-wrap gap-10 mb-10'>
					<div className='flex flex-col gap-4'>
						<p className='text-sm font-medium'>
							Exclusivos para alunos uiBoost 📏
						</p>
						<h1>
							Estude design até em outra{" "}
							<span className='text-pink'>galáxia</span>
						</h1>
						<p>
							Baixe o app do uiBoost e tenha acesso a todo o
							conteúdo do curso uiBoost na palma da sua mão, mesmo
							estando offline. Aprenda de qualquer lugar e a
							qualquer hora.
						</p>
					</div>
					<div className='flex flex-row w-full gap-3 items-center justify-evenly'>
						<a href='#'>
							<img
								src={appStoreApple}
								alt='Download via Apple App Store'
								className='min-w-32'
							/>
						</a>
						<a href='#'>
							<img
								src={appStoreGoogle}
								alt='Download via Google Play store'
								className='min-w-32'
							/>
						</a>
					</div>
				</div>
				<div className='w-full'>
					<img
						src={smartphoneMock}
						alt='Visualization of the app home screen on a mobile device'
					/>
				</div>
				<ArrowIcon
					className='h-14 my-10'
					color='#F974CC'
					style={{ transform: "scaleY(-100%)" }}
				/>
				<div className='flex flex-col justify-center text-center gap-10'>
					<div className='flex flex-col gap-4'>
						<h1 className='font-semibold lg:text-5xl text-2.5xl leading-8'>
							O{" "}
							<span className='text-pink relative'>
								Boost
								<UnderlineCallout
									color='#F974CC'
									width={"4ch"}
									className='absolute bottom-[-2px] left-0 right-0'
								/>
							</span>{" "}
							para a sua carreira
						</h1>
						<p>
							Ajudamos designers a se especializarem em UI design
						</p>
					</div>
					<div className='flex flex-row gap-10 flex-wrap justify-center items-center'>
						<div className='flex flex-col gap-4 justify-center items-center'>
							<div className='flex flex-row flex-nowrap gap-4 w-fit items-center'>
								<img
									src={students}
									alt='Mais de 300'
									className='max-h-[72px]'
								/>
								<span className='text-theme-gradient'>+</span>
							</div>
							<p className='text-white'>
								Alunos com certificações
							</p>
						</div>
						<div className='flex flex-col gap-4 justify-center items-center'>
							<div className='flex flex-row flex-nowrap gap-4 w-fit items-center'>
								<img
									src={hours}
									alt='Mais de 60'
									className='max-h-[72px]'
								/>
								<span className='text-theme-gradient'>+</span>
							</div>
							<p className='text-white'>
								Horas de conteúdo gravado
							</p>
						</div>
						<div className='flex flex-col gap-4 justify-center items-center'>
							<div className='flex flex-row flex-nowrap gap-4 w-fit items-center'>
								<img
									src={mentorship}
									alt='Mais de 5'
									className='max-h-[72px]'
								/>
								<span className='text-theme-gradient'>+</span>
							</div>
							<p className='text-white'>
								Horas de mentoria por turma
							</p>
						</div>
					</div>
				</div>
				<div
					id='uiboost-divider'
					className='h-20'>
					- ui boost ui boost ui boost ui boost -
				</div>
			</main>
		</div>
	);
}

const ArrowIcon = ({ color, style, className }: SVGPropTypes) => {
	return (
		<svg
			style={style}
			className={className}
			width='70'
			height='100'
			viewBox='0 0 70 100'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M34.8611 99.5266V0.250183'
				stroke={color}
				stroke-width='3'
			/>
			<path
				d='M35.1108 0C35.1108 10.1667 41.9608 31.55 69.3609 35.7501'
				stroke={color}
				stroke-width='3'
			/>
			<path
				d='M34.6104 0C34.6104 10.1667 27.7604 31.55 0.360368 35.7501'
				stroke={color}
				stroke-width='3'
			/>
		</svg>
	);
};

const Logo = ({ color, style, className, width }: SVGPropTypes) => {
	return (
		<svg
			style={style}
			className={className}
			width={width || 120}
			viewBox='0 0 993 200'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				opacity='0.7'
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M549.139 50.0903H475.08C433.718 50.0903 400.188 83.6206 400.188 124.982C400.188 166.344 433.719 199.874 475.08 199.874H549.139V170.483H475.08C449.951 170.483 429.579 150.112 429.579 124.982C429.579 99.8528 449.951 79.4814 475.08 79.4814H549.139V50.0903Z'
				fill={color}
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M223.551 0L223.551 199.712H252.942V182.546C265.899 193.268 282.526 199.712 300.657 199.712C342.019 199.712 375.549 166.182 375.549 124.82C375.549 83.4582 342.019 49.928 300.657 49.928C282.526 49.928 265.899 56.3714 252.942 67.0934L252.942 0H223.551ZM300.657 170.321C275.528 170.321 255.156 149.949 255.156 124.82C255.156 99.6905 275.528 79.3191 300.657 79.3191C325.787 79.3191 346.158 99.6905 346.158 124.82C346.158 149.949 325.787 170.321 300.657 170.321ZM21.2832 139.498V50.4209H0V139.498C0 172.912 27.0878 200 60.5022 200C93.9167 200 121.004 172.912 121.004 139.498V50.4209H99.7213V139.498C99.7213 161.158 82.1623 178.717 60.5022 178.717C38.8422 178.717 21.2832 161.158 21.2832 139.498ZM153.436 50.421V199.443H174.719L174.719 50.421H153.436ZM915.43 79.052V144.111C915.43 174.741 940.261 199.572 970.891 199.572H992.872V170.181H970.891C956.493 170.181 944.821 158.509 944.821 144.111V79.052H992.959V49.6609H944.821V0.000140482H915.43V49.6609H893.103V79.052H915.43ZM724.375 94.3925C724.375 69.6879 744.662 49.6609 769.687 49.6609H859.981V78.6755H769.687C760.894 78.6755 753.766 85.7122 753.766 94.3925C753.766 103.073 760.894 110.109 769.687 110.109L786.566 110.109H823.467C848.493 110.109 868.779 130.136 868.779 154.841C868.779 179.545 848.493 199.572 823.467 199.572H725.334V170.558H823.467C832.26 170.558 839.388 163.521 839.388 154.841C839.388 146.161 832.26 139.124 823.467 139.124L794.365 139.124H769.687C744.662 139.124 724.375 119.097 724.375 94.3925ZM625.319 79.4814H550.427C525.297 79.4814 504.926 99.8529 504.926 124.982C504.926 150.112 525.297 170.483 550.427 170.483H625.319C650.448 170.483 670.819 150.112 670.819 124.982C670.819 99.8529 650.448 79.4814 625.319 79.4814ZM550.427 50.0904C509.065 50.0904 475.535 83.6206 475.535 124.982C475.535 166.344 509.065 199.874 550.427 199.874H625.319C666.68 199.874 700.211 166.344 700.211 124.982C700.211 83.6206 666.68 50.0904 625.319 50.0904H550.427Z'
				fill={color}
			/>
		</svg>
	);
};

const DropMenuIcon = ({ color, style, className, width }: SVGPropTypes) => {
	return (
		<svg
			style={style}
			className={className}
			width={width || "40"}
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M8 20H32'
				stroke={color}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M8 13H32'
				stroke={color}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M16 28L32 28'
				stroke={color}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

const UnderlineCallout = ({ color, style, className, width }: SVGPropTypes) => (
	<svg
		aria-hidden
		style={style}
		className={className}
		width={width || "300"}
		viewBox='0 0 300 33'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M1.59863 21.628C70.8873 8.59701 181.335 -0.263348 298 2.50892'
			stroke={color}
			stroke-width='3'
			stroke-linecap='round'
		/>
		<path
			d='M95.1272 29.704C128.548 24.1396 212.979 13.9586 283.335 17.7493'
			stroke={color}
			stroke-width='3'
			stroke-linecap='round'
		/>
	</svg>
);

export default App;
