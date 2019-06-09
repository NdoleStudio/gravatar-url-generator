const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        tailwindcss("./tailwind.js"),
        autoprefixer({
            add: true,
            grid: true
        }),
        //Only add purgecss in production
        process.env.NODE_ENV === "production"? purgecss({
            content: [
                './public/**/*.html',
                './src/**/*.vue',
                './src/**/*.jsx',
            ],
            // Include any special characters you're using in this regular expression
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }): ""
    ]
};