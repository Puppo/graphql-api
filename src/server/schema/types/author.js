
import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';

import { fakeDatabase } from '../../fake-database';
import { Post } from './post';

export const Author = new GraphQLObjectType({
  name: 'Author',
  description: 'All detail of an author on the website',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },

    posts: {
      type: new GraphQLList(Post),
      resolve: (author) => fakeDatabase.getPostsOfAuthor(author.id)
    }
  })
});

export const AuthorInputType = new GraphQLInputObjectType({
  name: 'AuthorInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  }
});
