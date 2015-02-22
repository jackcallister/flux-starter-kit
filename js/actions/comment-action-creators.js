var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

  createComment: function(comment) {
    AppDispatcher.handleAction({
      type: "CREATE_COMMENT",
      comment: comment
    });
  }
};
