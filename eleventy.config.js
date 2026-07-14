// Eleventy v3 configuration for Laguna Beach Counseling.
// CSS is compiled separately by the Tailwind CLI into public/css/main.css
// (see package.json scripts), so Eleventy only handles templates and passthrough.

export default function (eleventyConfig) {
  // Static passthrough. Cloudflare Pages control files and static assets
  // are copied to the output root untouched.
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": "site.webmanifest" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // Rerun the browser when the compiled stylesheet changes during `npm start`.
  eleventyConfig.addWatchTarget("public/css/main.css");

  // Current year, handy for the footer copyright without hardcoding a date.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
