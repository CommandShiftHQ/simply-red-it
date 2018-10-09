function CommentForm() {
  return `
    <form id="comment-form">
      <div>
        <label for="name">
          Name:
          <input id="comment-form-name" name="name" type="text" />
        </label>
      </div>
      <div>
        <label for="email">
          Email:
          <input id="comment-form-email" name="email" type="email" />
        </label>
      </div>
      <div>
        <label for="body">
          Comment:
          <textarea id="comment-form-body" name="body"></textarea>
        </label>
      </div>
      <button id="comment-form-submit" type="submit">Submit</button>
    </form>
  `;
}
