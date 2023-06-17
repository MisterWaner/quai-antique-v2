/** @type {import('tailwindcss').Config} */

import tailwindform from '@tailwindcss/forms'

export default {
    content: [
        "./index.html", 
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "bwn-color": "#7d5a50",
                "pastel": "#fcdec0",
                "ocre": "#E5B299"
            },
            backgroundColor: {
                "bwn-color": "#7d5a50",
                "pastel": "#fcdec0",
                "ocre": "#E5B299"
            },
            boxShadowColor: {
                "bwn-color": "#7d5a50"
            }
        },
    },
    plugins: [
        tailwindform
    ],
};
