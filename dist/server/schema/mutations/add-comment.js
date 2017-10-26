"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fakeDatabase = require("../../fake-database");

var _comment = require("../types/comment");

exports.default = {
  addPost: {
    type: _comment.Comment,
    description: 'Create a new comment post',
    args: {
      comment: { type: _comment.CommentInputType }
    },
    resolve: function resolve(parent, _ref) {
      var comment = _ref.comment;

      return _fakeDatabase.fakeDatabase.addNewComment(comment);
    }
  }
};