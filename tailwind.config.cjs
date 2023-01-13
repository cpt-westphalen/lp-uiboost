/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"theme-linear":
					"linear-gradient(255.21deg, #BB44F0 -27.38%, #F974CC 30.45%, #FFC9BB 100.92%)",
			},
			colors: {
				pink: {
					DEFAULT: "#F974CC",
					light: "#FF9FDE",
					dark: "#EE56BB",
				},
				salmon: {
					DEFAULT: "#FEA9AA",
					light: "#FFB9BA",
					dark: "#EF8A8B",
				},
				purple: {
					DEFAULT: "#BB44F0",
					light: "#C55BF5",
					dark: "#A836DB",
				},
				gray: {
					100: "#17161C",
					150: "#1E1D24",
					200: "#3A3847",
					300: "#605E70",
					400: "#737185",
					500: "#888599",
					600: "#9D9AAD",
					700: "#BAB8C6",
					800: "#D8D7DE",
					900: "#E2E1E6",
				},
				white: "#FFF",
				red: {
					theme: "#F97474",
				},
				green: {
					theme: "#6FE87B",
				},
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			fontSize: {
				"2.5xl": "1.75rem",
			},
			height: {
				18: "4.5rem",
			},
		},
	},
	plugins: [],
};
