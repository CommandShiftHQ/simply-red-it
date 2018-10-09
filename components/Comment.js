function Comment(comment) {
  return `
    <div class="comment" id="comment-${comment.id}">
      <p class="comment-body">${comment.body}</p>
      <p class="comment-author">${comment.email}</p>
    </div>
  `;
}
