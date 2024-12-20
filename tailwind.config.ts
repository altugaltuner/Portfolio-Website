import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {

		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1280px",
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		},

		extend: {
			height: {
				'custom-75': 'calc(75vh + 90px)',
				'custom-140': 'calc(100vh - 180px)',
			},
			screens: {
				'lg': '1280px',
			},
			colors: {
				primary: '#1c1c22',
				accent: {
					DEFAULT: "#00FF99",
					hover: "88e187",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar'),],

};
export default config;


