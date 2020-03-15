require("dotenv").config();
const withSass = require("@zeit/next-sass");
const tailwindCss = require("tailwindcss");
module.exports = withSass({
  poweredByHeader: false,
  env: {
    CMS_URL: process.env.CMS_URL,
    PROJECT_NAME: process.env.PROJECT_NAME
  },
  cssModules: true,
  webpack(config, options) {
    const rules = [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [tailwindCss("./tailwind.config.js")]
            }
          },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeViewBox: false }]
              }
            }
          }
        ]
      }
    ];
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...rules]
      }
    };
  }
});
