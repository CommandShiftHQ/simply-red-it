function Post (post) {
  return `
    <div class="post" id=${post.id}>
      <a href="post.html?id=${post.id}"><h3>${post.title}</h3></a>
      <p>${post.body}</p>
    </div>
  `
}
