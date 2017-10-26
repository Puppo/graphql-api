import { GraphQLNonNull, GraphQLInt } from "graphql";

import { fakeDatabase } from "../../fake-database";
import { Post } from "../types/post"

export default {
  post: {
    type: Post,
    description: 'Get detail about a specific blog post',
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: function (parent, {id}) {
      return fakeDatabase.getBlogPost(id);
    }
  }
};
