var VALID_DEPLOY_TARGETS = [ //update these to match what you call your deployment targets
  'development-post-build',
  'production'
];

module.exports = function(deployTarget) {
  var ENV = {};

  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'development-post-build') {
    ENV.plugins = ['redis'];
    ENV.build = {
      environment: 'development'
    };
    ENV.redis = {
      keyPrefix: 'rssify:index',
      revisionKey: 'development',
      allowOverwrite: true,
      distDir: function(context) {
        return context.commandOptions.buildDir;
      }
    };
  }

  if (deployTarget === 'production') {
    ENV.build = {
      environment: 'production'
    };
    ENV.redis = {
      keyPrefix: 'rssify:index',
      allowOverwrite: true,
      host: 'localhost'
    };
    ENV['ssh-tunnel'] = {
      username: process.env['EC2_SSH_USERNAME'],
      host: process.env['EC2_HOST'],
      dstHost: process.env['REDIS_HOST']
    };
    ENV.s3 = {
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_KEY'],
      bucket: 'rssify',
      region: 'eu-central-1'
    };
  }

  return ENV;

  /* Note: a synchronous return is shown above, but ember-cli-deploy
   * does support returning a promise, in case you need to get any of
   * your configuration asynchronously. e.g.
   *
   *    var Promise = require('ember-cli/lib/ext/promise');
   *    return new Promise(function(resolve, reject){
   *      var exec = require('child_process').exec;
   *      var command = 'heroku config:get REDISTOGO_URL --app my-app-' + deployTarget;
   *      exec(command, function (error, stdout, stderr) {
   *        ENV.redis.url = stdout.replace(/\n/, '').replace(/\/\/redistogo:/, '//:');
   *        if (error) {
   *          reject(error);
   *        } else {
   *          resolve(ENV);
   *        }
   *      });
   *    });
   *
   */
}
