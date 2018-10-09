function PostPage(post, comments) {
  return `
    ${Post(post)}
    ${Comments(comments)}
  `;
}
