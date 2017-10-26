"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _fakeDatabase = require("../../fake-database");

var _post = require("../types/post");

exports.default = {
  posts: {
    type: new _graphql.GraphQLList(_post.Post),
    description: 'Get a list of recent blog posts',
    args: {},
    resolve: function resolve() {
      return _fakeDatabase.fakeDatabase.getBlogPosts();
    }
  }
};