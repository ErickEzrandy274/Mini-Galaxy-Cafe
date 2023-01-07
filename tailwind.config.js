module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			spacing: {
				"1/10": "10%",
				"1/15": "15%",
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#6419E6",
					secondary: "#D926A9",
					accent: "#E53935",
					neutral: "#191D24",
					"base-100": "#2A303C",
					info: "#3ABFF8",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272",
					"base-200": "#e0e0e0",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
