var React = require('react');

var Comments = require('./components/comments');
var CommentForm = require('./components/comment-form');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Comments />
        <CommentForm />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
