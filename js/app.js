var React = require('react');

var App = React.createClass({

  render: function() {
    return (
      <h1>Flux application is working!</h1>
    );
  }
});

React.render(<App />, document.getElementById('app'));
