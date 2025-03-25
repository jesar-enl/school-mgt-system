/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2563eb',
                    rgb: '37, 99, 235'
                }
            },
            keyframes: {
                slideIn: {
                    '0%': { transform: 'translateY(1rem)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                }
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
} 