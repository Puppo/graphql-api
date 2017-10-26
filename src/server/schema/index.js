import { GraphQLSchema, GraphQLObjectType } from "graphql";

import posts from './queries/posts';
import post from './queries/post';
import author from './queries/author';

import addComment from './mutations/add-comment';
import addPost from './mutations/add-post';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Rootquery',
    fields: () => ({
      ...posts,
      ...post,
      ...author,
    })
  }),

  mutation: new GraphQLObjectType({
    name: 'Rootmutation',
    fields: () => ({
      ...addComment,
      ...addPost
    })
  })
});

export default schema;
