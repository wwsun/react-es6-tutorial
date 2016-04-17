module.exports = webpackConfig => {

  webpackConfig.babel.plugins.push('antd');

  webpackConfig.module.loaders.unshift(
    {
      test: /src(\\|\/).+\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: { presets: [ 'es2015', 'react', 'stage-0' ] }
    }
  );

  return webpackConfig;
};