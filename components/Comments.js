function Comments(comments) {
  const elements = comments.map(function(comment) {
    return Comment(comment);
  });
  return `
    <div class="comments">
      <h4>Comments</h4>
      ${elements.join('')}
    </div>
  `;
}
