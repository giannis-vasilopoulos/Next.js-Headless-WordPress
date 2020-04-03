require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withSass = require("@zeit/next-sass");
const withPWA = require("next-pwa");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  poweredByHeader: false,
  env: {
    CMS_URL: process.env.CMS_URL,
    DEFAULT_LANG: process.env.DEFAULT_LANG
  },
  webpack: (config, options) => {
    config.module.rules.push({
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
    });

    return config;
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
    [withFonts],
    [withSass],
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
