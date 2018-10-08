function Post (postData) {
  return `
    <div class="post">
      <a href="post.html?id=${postData.id}"><h3>${postData.title}</h3></a>
      <p>${postData.body}</p>
    </div>
  `
}
