import type { Config } from 'tailwindcss'
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
	content: {
		files: [
			'./pages/**/*.{js,ts,jsx,tsx,mdx}',
			'./components/**/*.{js,ts,jsx,tsx,mdx}',
			'./app/**/*.{js,ts,jsx,tsx,mdx}'
		],
		extract
	},
	theme: {
		screens,
		fontSize,
		fontFamily: {
			sans: ['var(--font-base)', 'sans-serif'],
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--text-primary)',
				},
				secondary: {
					DEFAULT: 'var(--text-secondary)'
				},
				highlight: {
					DEFAULT: 'var(--highlight)'
				},
				accent: {
					DEFAULT: 'var(--accent)'
				},
				black: {
					DEFAULT: 'var(--black)',
					'800': 'var(--bg-800)',
					'700': 'var(--bg-700)'
				},
				backdrop: {
					DEFAULT: 'var(--backdrop)',
				}
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
				},
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px'
				}
			},
			aspectRatio: {
				'3/2': '3 / 2'
			}
		}
	},
	plugins: [
		fluid
	]
} satisfies Config
