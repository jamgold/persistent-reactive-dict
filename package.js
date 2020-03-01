Package.describe({
  name: 'jamgold:persistent-reactive-dict',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 're-implement robertlowe:persistent-reactive-dict in pure javascript and without dependency on amplify package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jamgold/persistent-reactive-dict.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.9');
  api.use([
    'ecmascript',
    'underscore',
    'tracker',
    'ejson',
    'modules',
    'reactive-dict'
  ], 'client');
  // api.use('session');
  api.mainModule('client.js', 'client', { lazy: true });
});
