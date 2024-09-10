import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        main: '#F0ECE5',
        second: '#D4AF37',
        third: '#DFBD69',
        fourth: '#926F34',
        GoldenTop: '#d8ab4e',
        GoldenBottom: ' #b48c36',
        CharcoalBlack: '#040404'
      }
    }
  },
  plugins: []
}
export default config
