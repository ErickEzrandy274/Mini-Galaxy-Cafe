module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          spacing: {
            '1/10': '10%',
            '1/15': '15%',
          }
        },
    },
    plugins: [require("daisyui")],
};
