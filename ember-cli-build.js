/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // disable importing of ember related libraries
    vendorFiles: {
      'handlebars.js': null,
      'ember.js': null,
      'ember-testing.js': null,
      'app-shims.js': null,
      'ember-resolver.js': null
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  var bootstrapFonts = new Funnel('node_modules/bootstrap-sass/assets/fonts/bootstrap', {
    destDir: '/assets/fonts'
  });

  var fontawesomeFonts = new Funnel('node_modules/font-awesome/fonts', {
    destDir: '/assets/fonts'
  });

  app.import('vendor/bootstrap/bootstrap.js');

  return app.toTree([bootstrapFonts, fontawesomeFonts]);
};
