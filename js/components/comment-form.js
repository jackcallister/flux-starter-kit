var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentForm = React.createClass({

  onSubmit: function(e) {
    var textNode = this.refs.text.getDOMNode();
    var text = this.refs.text.getDOMNode().value;

    if (text != '') {
      CommentActionCreators.createComment({
        text: text
      });

      textNode.value = '';
    }
  },

  render: function() {
    return (
      <div className='comment-form'>
        <textarea ref='text' />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
});

module.exports = CommentForm;
