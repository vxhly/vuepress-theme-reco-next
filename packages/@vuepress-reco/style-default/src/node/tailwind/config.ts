import { mdStylePlugin } from './plugin-md-style'
const colors = require('tailwindcss/colors')

export const tailwindConfig = {
  purge: ['./src/**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: (): Record<string, any> => ({ 'screen-3/5': '60vh' }),
      colors: {
        primary: colors.green,
      },
      borderRadius: {
        '1/2': '50%',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['dark'],
      borderWidth: ['dark'],
    },
  },
  plugins: [mdStylePlugin],
}
