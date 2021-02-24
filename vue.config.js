/* eslint-disable */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/styles/_main.scss";',
            },
        },
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(json5?|ya?ml)$/,
                    type: 'javascript/auto',
                    loader: '@intlify/vue-i18n-loader',
                    include: [path.resolve(__dirname, 'src/i18n')],
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                __VUE_I18N_FULL_INSTALL__: true,
                __VUE_I18N_LEGACY_API__: true,
                __INTLIFY_PROD_DEVTOOLS__:
                    process.env.NODE_ENV !== 'production',
                __VUE_OPTIONS_API__: false,
                __VUE_PROD_DEVTOOLS__: false,
            }),
        ],
    },
};
