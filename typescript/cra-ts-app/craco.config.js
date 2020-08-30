const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");


module.exports = {
    plugins: [{
        plugin: CracoAntDesignPlugin,
        options: {
            customizeThemeLessPath: path.join(
                __dirname,
                "src/assets/less/theme.less"
            ),
            cssLoaderOptions: {
                modules: {
                    localIdentName: "[local]"
                }
            },
        }
    }],
    devServer: {
        disableHostCheck: true,
        port: 2002,
    },    
};