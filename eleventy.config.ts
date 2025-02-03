import type { UserConfig } from "@11ty/eleventy";




export default async function (eleventyConfig: UserConfig) {
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.png");
  eleventyConfig.addPassthroughCopy("src/**/*.svg");
  eleventyConfig.addPassthroughCopy("src/**/*.webp");
  eleventyConfig.addPassthroughCopy("src/**/*.mp4");
  eleventyConfig.addPassthroughCopy("src/**/*.ico");
  eleventyConfig.addPassthroughCopy("src/**/*.woff");
  eleventyConfig.addPassthroughCopy("src/**/*.ttf");
  eleventyConfig.addPassthroughCopy("src/**/*.woff2");

  eleventyConfig.addPassthroughCopy("src/**/*.js");
  eleventyConfig.addPassthroughCopy("src/**/*.css");

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };

}




