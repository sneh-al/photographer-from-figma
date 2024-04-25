/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			"white": "#ffffff",
			"black": "#000000",
			"purple-55": "#4a2ced",
			"purple-60": "#5e43ef",
			"purple-70": "#8672f3",
			"purple-80": "#aea1f7",
			"purple-90": "#d6d0fb",
			"purple-95": "#eae7fd",
			"purple-97": "#f3f1fe",
			"purple-99": "#fbfaff",
			"dark-03": "#070708",
			"dark-06": "#0e0e10",
			"dark-08": "#131316",
			"dark-12": "#1c1c21",
			"dark-15": "#232329",
			"dark-20": "#2f2f37",
			"dark-25": "#3b3b45",
			"dark-30": "#474752",
			"grey-40": "#62646c",
			"grey-50": "#797c86",
			"grey-70": "#afb0b6",
			"grey-80": "#cacace",
			"grey-90": "#e4e4e6",
			"grey-95": "#f2f2f3",
			"grey-97": "#f7f7f8",
			"grey-99": "#fcfcfd"
		  },
		  borderColor: {
			DEFAULT: '#1c1c21',
		},
		extend: {},
		daisyui: {	
			themes: false, 
			darkTheme: "dark", // name of one of the included themes for dark mode
			base: false, // applies background color and foreground color for root element by default
			styled: false, // include daisyUI colors and design decisions for all components
			utils: true, // adds responsive and modifier utility classes
			prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
			logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
			themeRoot: ":root", // The element that receives theme color CSS variables
		  }
	},
	plugins: [require("daisyui")],
}
