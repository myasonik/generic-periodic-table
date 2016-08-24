module.exports = {
  watch: false,
  prod: false,
  src: 'source/',
  dest: './docs/',
  outputJadeIncludes: true,
  watchDest: ['output/**/*', '!output/**/*.html'],
  extensionlessRoutes: false // WARNING: Experimental
};