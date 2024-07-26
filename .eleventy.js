const esbuild = require("esbuild");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const tableroll = require("./_11ty/shortcodes/tableroll");

module.exports = function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", (lib) => lib.use(markdownItAnchor));
  eleventyConfig.addWatchTarget("assets/js/");

  eleventyConfig.addPlugin(pluginTOC, {
    ul: true,
  });

  eleventyConfig.addPassthroughCopy("public");

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
