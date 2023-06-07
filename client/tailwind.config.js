/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", 
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "bwn-color": "#7d5a50",
                "pastel": "#fcdec0"
            },
            backgroundColor: {
                "bwn-color": "#7d5a50",
                "pastel": "#fcdec0"
            }
        },
    },
    plugins: [],
};
