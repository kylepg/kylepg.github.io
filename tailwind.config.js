
module.exports = {
    content: [
        "./**/*.{html,js}",
        "!./node_modules/**/*"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
