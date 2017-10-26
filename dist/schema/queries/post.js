"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _fakeDatabase = require("../../fake-database");

var _post = require("../types/post");

exports.default = {
  post: {
    type: _post.Post,
    description: 'Get detail about a specific blog post',
    args: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) }
    },
    resolve: function resolve(parent, _ref) {
      var id = _ref.id;

      return _fakeDatabase.fakeDatabase.getBlogPost(id);
    }
  }
};