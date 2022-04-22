const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const miniCssPlugin = new MiniCssExtractPlugin();
const dotenv = new Dotenv();

const htmlPlugin = new HtmlWebPackPlugin({
  template: '/public/index.html',
  filename: './index.html',
});

const environmentPlugin = new webpack.DefinePlugin({
  'process.env': {
    PRISMIC_ACCESS_TOKEN: JSON.stringify(process.env.PRISMIC_ACCESS_TOKEN),
    PRISMIC_REPOSITORY_URL: JSON.stringify(process.env.PRISMIC_REPOSITORY_URL),
  },
});

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [
          /node_modules/,
          path.resolve(__dirname, './src/components/slider/lib'),
          path.resolve(__dirname, './src/components/image-gallery/lib'),
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // localIdentName is needed to be able to work with styles.css files
              modules: { localIdentName: '[local]___[hash:base64:5]' },
              sourceMap: true,
              importLoaders: 2,
            },
          },
          { loader: 'scoped-css-loader' },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['node_modules'],
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /lib-styles\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // localIdentName is needed to be able to work with styles.css files
              modules: { localIdentName: '[local]' },
              sourceMap: true,
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        exclude: /(.*\/backgrounds|slick-carousel)/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      _components: path.resolve(__dirname, 'src/components'),
      _constants: path.resolve(__dirname, 'src/constants'),
      _assets: path.resolve(__dirname, 'src/assets'),
      _views: path.resolve(__dirname, 'src/views'),
      _routes: path.resolve(__dirname, 'src/routes'),
      _utils: path.resolve(__dirname, 'src/utils'),
      _hooks: path.resolve(__dirname, 'src/hooks'),
      _services: path.resolve(__dirname, 'src/services'),
      _api: path.resolve(__dirname, 'src/api'),
      _modules: path.resolve(__dirname, 'src/modules'),
      _middleware: path.resolve(__dirname, 'src/middleware'),
      _store: path.resolve(__dirname, 'src/store'),
    },
  },
  plugins: [
    htmlPlugin,
    miniCssPlugin,
    ...(isDevelopment ? [dotenv] : [environmentPlugin]),
  ],
};
