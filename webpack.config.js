const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

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
        },
        fallback: {
            fs: false,
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser')
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
