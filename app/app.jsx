const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');
const Main = require('Main');
const Timer = require('Timer');
const CountDown = require('CountDown');

// Load foundation


$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>   
    <Route path="/countdown" component={CountDown} />
    <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);

