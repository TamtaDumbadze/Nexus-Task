/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        fontSize: {
            lg: '64px',
            m: '36px',
            s: '18px',
            xs: '16px',
            xxs: '12px',
        },
        colors: {
            violetDark1: '#1A0745',
            violetDark2: '#543E81',
            violetSoft: '#9D71FD',
            light: '#5F517D',
            white: '#FFFFFF',
            borderColor: '#1a07451a',
            borderColor2: '#E8E6EC',
            borderLine: '#D7CFFD',
            background: '#F2EFFE',
        },
    },
    plugins: [],
}
