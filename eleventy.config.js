module.exports = function (eleventyConfig) {
    // Static assets are copied through untouched, preserving their public URLs.
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/design-system");
    eleventyConfig.addPassthroughCopy({
        "src/CNAME": "CNAME",
        "src/favicon.png": "favicon.png",
        "src/favicon-16.png": "favicon-16.png",
        "src/apple-touch-icon.png": "apple-touch-icon.png",
    });

    return {
        dir: { input: "src", includes: "_includes", output: "_site" },
        // Only .njk files are templates; CSS/JS/PNG/MD are passthrough-only.
        templateFormats: ["njk"],
        htmlTemplateEngine: "njk",
    };
};
