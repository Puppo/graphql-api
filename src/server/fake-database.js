class FakeDatabse {

  constructor () {

    this.authors = [
      {id: '88d6bec2', name: 'Athor 1', email: 'author1@graphql.com'},
      {id: '77e2448a', name: 'Athor 2', email: 'author2@graphql.com'},
      {id: '0beb564c', name: 'Athor 3', email: 'author3@graphql.com'},
    ];

    this.blogPosts = [
      {
        id: 1,
        title: 'My first blog post',
        content: 'This is my very first blog post. Hope you like it!',
        author: '88d6bec2'
      },
      {
        id: 2,
        title: 'Second blog post',
        content: 'Back for another round!',
        author: '0beb564c'
      },
      {
        id: 3,
        title: 'Build a REST API',
        content: 'A pratical guide on how to build your own REST API',
        author: '77e2448a'
      },
    ];

    this.comments = [
      {id: 1, postId: 1, name: 'Anonymous', content: 'Good luck with your blog!'},
      {id: 2, postId: 1, name: 'Nick', content: 'Great first article. Do you have an RSS feed?'},
      {id: 3, postId: 3, name: 'Peter', content: 'You should check out GraphQL. It\'s way better.'}
    ];

  }

  // ----------------------------------------------------------------
  //                        READ METHOD
  // ----------------------------------------------------------------
  getBlogPosts() {
    return this.blogPosts;
  }

  getBlogPost(id) {
    return this.blogPosts.filter(post => post.id === id)[0];
  }

  getCommentsForPost(postId) {
    return this.comments.filter(comment => comment.postId === postId);
  }

  getAuthor(authorId) {
    return this.authors.filter(author => author.id === authorId)[0];
  }

  getPostsOfAuthor(authorId) {
    return this.blogPosts.filter(post => post.author === authorId);
  }

  // ----------------------------------------------------------------
  //                        WRITE METHOD
  // ----------------------------------------------------------------
  addNewBlogPost(post) {
    post.id = this.blogPosts.length + 1;
    this.blogPosts.push(post);
    return post;
  }

  addNewComment(comment) {
    comment.id = this.comments.length + 1;
    this.comments.push(comment);
    return comment;
  }

}

export const fakeDatabase = new FakeDatabse();
