import { GraphQLNonNull, GraphQLString } from "graphql";

import { fakeDatabase } from "../../fake-database";
import { Author } from "../types/author"

export default {
  author: {
    type: Author,
    description: 'Get a specific author',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: function (parent, {id}) {
      return fakeDatabase.getAuthor(id);
    }
  }
};
