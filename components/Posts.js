function Posts (posts) {
  const postElements = posts.map(function (post) {
    return Post(post);
  });

  return postElements.join('');
}
