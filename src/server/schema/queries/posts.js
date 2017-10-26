import { GraphQLList } from "graphql";

import { fakeDatabase } from "../../fake-database";
import { Post } from "../types/post"

export default {
  posts: {
    type: new GraphQLList(Post),
    description: 'Get a list of recent blog posts',
    args: { },
    resolve: function () {
      return fakeDatabase.getBlogPosts();
    }
  }
};
