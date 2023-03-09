const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {

    mode: 'development',

    entry: [
        'babel-polyfill',
        './assets/js/index.js',
        './assets/scss/app.scss'
    ],

    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, './assets/js/'),
        publicPath: '.'
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '../css/main.min.css'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [require('autoprefixer')]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
    ]

};
