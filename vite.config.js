import { svgSpritemap } from 'vite-plugin-svg-spritemap';

export default {
  plugins: [
    svgSpritemap({
      pattern: "src/icons/*.svg",
      prefix: "icon",
      svgo: false
    }),
  ],
};
