function DOM (rootElement) {
  this._rootElement = document.querySelector(rootElement);
}

DOM.prototype.render = function (html) {
  this._rootElement.innerHTML = html;
}
