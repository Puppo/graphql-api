'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorInputType = exports.Author = undefined;

var _graphql = require('graphql');

var _fakeDatabase = require('../../fake-database');

var _post = require('./post');

var Author = exports.Author = new _graphql.GraphQLObjectType({
  name: 'Author',
  description: 'All detail of an author on the website',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLString },
      name: { type: _graphql.GraphQLString },
      email: { type: _graphql.GraphQLString },

      posts: {
        type: new _graphql.GraphQLList(_post.Post),
        resolve: function resolve(author) {
          return _fakeDatabase.fakeDatabase.getPostsOfAuthor(author.id);
        }
      }
    };
  }
});

var AuthorInputType = exports.AuthorInputType = new _graphql.GraphQLInputObjectType({
  name: 'AuthorInput',
  fields: {
    name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    email: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
  }
});