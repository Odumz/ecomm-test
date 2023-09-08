/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !==undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`
    }
    return `hsl(var(${variableName}))`
  }
}
export default {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity('--color-primary'),
        'primary-accent': withOpacity('--color-primary-accent'),
        blue: withOpacity('--color-blue'),
        grey: withOpacity('--color-grey'),
        ash: withOpacity('--color-ash'),
        offwhite: withOpacity('--color-offwhite'),
        'light-grey': withOpacity('--color-light-grey')
      },
      fontFamily: {
        Saro: ["Sora", "sans-serif"]
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-20': 'span 20 / span 20',
      },
      keyframes: {
        hover: {
          '0%': { transform: 'translateY(0)'},
          '30%': { transform: 'translateY(-20px)'},
          '60%': { transform: 'translateY(0)'},
          '90%': { transform: 'translateY(20px)'},
        },
        hoverIcon: {
          '0%': { transform: 'translateY(0)'},
          '30%': { transform: 'translateY(-2px)'},
          '60%': { transform: 'translateY(0)'},
          '90%': { transform: 'translateY(2px)'},
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        flyIn: {
          '0%': { transform: 'translateY(40px)' },
          '50%': { transform: 'translateY(0)' },
        },
        flyOut: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        hover: 'hover 1.5s linear infinite',
        hoverIcon: 'hoverIcon 1s linear infinite',
        wave: 'wave 2s linear infinite',
        flyIn: 'flyIn 0.1s linear',
        flyOut: 'flyOut 0.1s linear',
      }
    },
  },
  plugins: [],
}

