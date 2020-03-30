const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js"
  ],

  // make sure css reset isnt removed on html and body
  whitelist: ["html", "body"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
// prettier-ignore
module.exports = {
  plugins: [
    require("autoprefixer")({
      "flexbox": "no-2009"
    }),
    ...(process.env.NODE_ENV === "production" ? [
      purgecss,
      require('cssnano')({
      preset: 'default',
      })
    ] : [])
  ]
};
