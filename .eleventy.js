const esbuild = require("esbuild");
const fs = require("node:fs");
const sass = require("sass");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const tableroll = require("./_11ty/shortcodes/tableroll");

module.exports = function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", (lib) => lib.use(markdownItAnchor));
  eleventyConfig.addWatchTarget("assets/");

  eleventyConfig.addPlugin(pluginTOC, {
    ul: true,
  });

  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.on("afterBuild", () => {
    const result = sass.compile("assets/sass/main.scss", {
      style: "compressed",
      loadPaths: ["node_modules"]
    });

    return fs.writeFileSync("_site/assets/css/main.css", result.css);
  });

  eleventyConfig.on("afterBuild", () => {
    return esbuild.build({
      entryPoints: ["assets/js/application.js"],
      outdir: "_site/assets/js/",
      minify: process.env.ELEVENTY_ENV === "production",
      bundle: true,
    });
  });

  eleventyConfig.addNunjucksShortcode("tableroll", tableroll);

  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
