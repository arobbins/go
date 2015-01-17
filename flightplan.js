// flightplan.js
var plan = require('flightplan');

// configuration
plan.target('staging', {
  host: 'go.simpleblend.net',
  username: 'simpleblend.net',
  agent: process.env.SSH_AUTH_SOCK
});

// run commands on localhost
plan.local(function(local) {
  var filesToCopy = local.exec('git ls-files', {silent: true});

  // rsync files to all the target's remote hosts
  local.transfer(filesToCopy, '~/domains/go.simpleblend.net/html');
});

// run more commands on localhost afterwards
plan.local(function(local) { /* ... */ });
// ...or on remote hosts
plan.remote(function(remote) { /* ... */ });