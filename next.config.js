require("dotenv").config();
const withPlugins = require("next-compose-plugins");

const sass = require("@zeit/next-sass");
const withPWA = require("next-pwa");
const tailwindCss = require("tailwindcss");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  poweredByHeader: false,
  env: {
    CMS_URL: process.env.CMS_URL,
    DEFAULT_LANG: process.env.DEFAULT_LANG
  },
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
    config.optimization.minimize = true;
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...rules]
      }
    };
  }
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        inlineImageLimit: 16384,
        handleImages: ["jpeg", "jpg", "png", "webp", "gif", "ico"]
      }
    ],
    [sass],
    [
      withPWA,
      {
        pwa: {
          dest: "public"
        }
      }
    ]
  ],
  nextConfig
);
