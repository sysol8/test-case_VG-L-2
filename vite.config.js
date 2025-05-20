import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";

export default {
    plugins: [
        VitePluginSvgSpritemap('./src/icons/*.svg', {
            styles: 'src/styles/spritemap.css',
            prefix: 'icon-',
        })
    ]
}