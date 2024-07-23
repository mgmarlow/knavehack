const esbuild = require("esbuild");
const tableroll = require("./_11ty/shortcodes/tableroll");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("assets/js/");

  eleventyConfig.on("afterBuild", () => {
    return esbuild.build({
      entryPoints: ["assets/js/application.js"],
      outdir: "_site/assets/js/",
      minify: process.env.ELEVENTY_ENV === "production",
      bundle: true
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
