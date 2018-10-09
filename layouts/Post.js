function PostPage(post, comments) {
  return `
    ${Header()}
    ${Post(post)}
    ${Comments(comments)}
    ${CommentForm()}
  `;
}
