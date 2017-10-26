
import { fakeDatabase } from "../../fake-database";
import { Post, PostInputType } from "../types/post"

export default {
  addPost: {
    type: Post,
    description: 'Create a new blog post',
    args: {
      post: { type: PostInputType }
    },
    resolve: function (parent, {post}) {
      return fakeDatabase.addNewBlogPost(post);
    }
  }
};
