"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _fakeDatabase = require("../../fake-database");

var _author = require("../types/author");

exports.default = {
  author: {
    type: _author.Author,
    description: 'Get a specific author',
    args: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(parent, _ref) {
      var id = _ref.id;

      return _fakeDatabase.fakeDatabase.getAuthor(id);
    }
  }
};