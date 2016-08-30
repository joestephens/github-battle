var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var _APP_INFO = {
  name: 'GitHub Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install()

console.log(window.thing.nope)

ReactDOM.render(
  routes,
  document.getElementById('app')
);
