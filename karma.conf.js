var webpack = require('webpack'); // eslint-disable-line no-var

module.exports = function karma(config) {
  config.set({
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-webpack',
    ],
    basePath: '.',
    frameworks: ['mocha'],
    files: [
      'test/*.js',
    ],
    exclude: [
      'test/_*.js',
    ],
    browsers: [
      'Chrome',
    ],
    preprocessors: {
      'test/*.js': ['webpack'],
    },
    webpack: {
      resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
          sinon: 'sinon/pkg/sinon',
        },
      },
      module: {
        noParse: [
          /node_modules\/sinon\//,
        ],
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
          },
        ],
      },
      plugins: [
        new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
        new webpack.IgnorePlugin(/react\/lib\/ExecutionEnvironment/),
      ],
    },
  });
};
