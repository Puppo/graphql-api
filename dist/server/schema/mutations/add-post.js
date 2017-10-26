"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fakeDatabase = require("../../fake-database");

var _post = require("../types/post");

exports.default = {
  addPost: {
    type: _post.Post,
    description: 'Create a new blog post',
    args: {
      post: { type: _post.PostInputType }
    },
    resolve: function resolve(parent, _ref) {
      var post = _ref.post;

      return _fakeDatabase.fakeDatabase.addNewBlogPost(post);
    }
  }
};