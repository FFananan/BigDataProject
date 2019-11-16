const webpack = require("webpack");
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    },
    // 加这个配置才不会build之后路径错乱
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
}
