const express = require("express");
const next = require("next");
const dotenv = require("dotenv");
dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const defaultLang = process.env.DEFAULT_LANG;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // middleware to check the lang to the request url
    server.use(function(req, res, next) {
      var match = req.url.match(/^\/([A-Z]{2})([\/\?].*)?$/i);
      if (match) {
        req.lang = match[1];
        req.url = match[2] || "/";
      } else {
        req.lang = defaultLang;
      }
      next();
    });

    server.get("/:type/:slug", (req, res) => {
      const actualPage = "/rooms/[slug]";
      const queryParams = {
        slug: req.params.slug,
        apiRoute: req.params.type,
        lang: req.lang
      };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get("/", (req, res) => {
      const queryParams = { slug: req.params.slug, lang: req.lang };
      return app.render(req, res, "/", queryParams);
    });

    server.get("/:slug", (req, res) => {
      const actualPage = req.params.slug === "rooms" ? "/rooms" : "/page";
      const queryParams = { slug: req.params.slug, lang: req.lang };
      return app.render(req, res, actualPage, queryParams);
    });

    //preview draft before publish
    server.get("/_preview/:id/:rev/:type/:status/:wpnonce", (req, res) => {
      const actualPage = "/preview";
      const { id, rev, type, status, wpnonce } = req.params;
      const queryParams = { id, rev, type, status, wpnonce };
      return app.render(req, res, actualPage, queryParams);
    });

    // Fallback handler
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
