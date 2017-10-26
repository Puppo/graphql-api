
import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList, GraphQLInputObjectType } from 'graphql';

import { fakeDatabase } from '../../fake-database';
import { Author } from './author';
import { Comment } from './comment';

export const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'All details of blog post',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },

    author: {
      type: Author,
      resolve: (post) => fakeDatabase.getAuthor(post.author)
    },

    comments: {
      type: new GraphQLList(Comment),
      resolve: (post) => fakeDatabase.getCommentsForPost(post.id)
    }
  })
});

export const PostInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) },
  }
});
