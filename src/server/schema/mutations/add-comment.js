
import { fakeDatabase } from "../../fake-database";
import { Comment, CommentInputType } from "../types/comment"

export default {
  addPost: {
    type: Comment,
    description: 'Create a new comment post',
    args: {
      comment: { type: CommentInputType }
    },
    resolve: function (parent, {comment}) {
      return fakeDatabase.addNewComment(comment);
    }
  }
};
