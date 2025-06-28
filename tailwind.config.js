/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-slide-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-8px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-slide-in': 'fade-slide-in 0.3s ease-out',
        float: 'float 6s ease-in-out infinite',
        scroll: 'scroll linear infinite',
      },

      // ✅ ✅ ✅ DO NOT NEST 'colors' inside 'colors'
      colors: {
        emerald: "#057D2F",
        mint: "#D7E5E1",
        darkgreen: "#124B30",
        deepblue: "#0B3B77",
        castleton_green: {
          DEFAULT: '#255740',
          100: '#07110d',
          200: '#0f2219',
          300: '#163326',
          400: '#1d4532',
          500: '#255740',
          600: '#3c8c67',
          700: '#5cb98e',
          800: '#92d0b4',
          900: '#c9e8d9',
        },
        sea_green: {
          DEFAULT: '#2F9151',
          100: '#091d10',
          200: '#133b21',
          300: '#1c5831',
          400: '#267542',
          500: '#2f9151',
          600: '#40c16d',
          700: '#70d192',
          800: '#a0e0b6',
          900: '#cff0db',
        },
        yinmn_blue: {
          DEFAULT: '#234E86',
          100: '#07101b',
          200: '#0e1f36',
          300: '#152f50',
          400: '#1c3e6b',
          500: '#234e86',
          600: '#316dbc',
          700: '#5c90d5',
          800: '#92b5e3',
          900: '#c9daf1',
        },
        yale_blue: {
          DEFAULT: '#0B3B77',
          100: '#020c17',
          200: '#04172f',
          300: '#072346',
          400: '#092f5d',
          500: '#0b3b77',
          600: '#115ebb',
          700: '#2d83eb',
          800: '#73acf2',
          900: '#b9d6f8',
        },
        white: {
          DEFAULT: '#FEFEFE',
          100: '#333333',
          200: '#666666',
          300: '#999999',
          400: '#cccccc',
          500: '#fefefe',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff',
        },
      },
      transitionProperty: {
        'spacing': 'padding, margin',
      },
    },

  },
  plugins: [],
}

