/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				'small-1': '0 4px 4px -4px #1E212C',
				'small-2': '0 12px 10px -6px #9A9CA5',
				'small-3': '0 30px 24px -10px #9A9CA5',
				'small-4': '0 80px 80px -20px #9A9CA5',
			},
		},
	},
	plugins: [],
}
