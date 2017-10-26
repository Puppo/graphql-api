'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostInputType = exports.Post = undefined;

var _graphql = require('graphql');

var _fakeDatabase = require('../../fake-database');

var _author = require('./author');

var _comment = require('./comment');

var Post = exports.Post = new _graphql.GraphQLObjectType({
  name: 'Post',
  description: 'All details of blog post',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt },
      title: { type: _graphql.GraphQLString },
      content: { type: _graphql.GraphQLString },

      author: {
        type: _author.Author,
        resolve: function resolve(post) {
          return _fakeDatabase.fakeDatabase.getAuthor(post.author);
        }
      },

      comments: {
        type: new _graphql.GraphQLList(_comment.Comment),
        resolve: function resolve(post) {
          return _fakeDatabase.fakeDatabase.getCommentsForPost(post.id);
        }
      }
    };
  }
});

var PostInputType = exports.PostInputType = new _graphql.GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    author: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
  }
});