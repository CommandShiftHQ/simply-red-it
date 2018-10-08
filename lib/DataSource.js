function DataSource (baseUrl) {
  this._baseUrl = baseUrl;
}

DataSource.prototype = {
  get: function (endpoint, callback) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', this._baseUrl + endpoint);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(JSON.parse(xhr.response));
      }
    };

    xhr.send();
  },
  post: function (endpoint, data, callback) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', this._baseUrl + endpoint);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 201) {
        callback(JSON.parse(xhr.response));
      }
    };

    xhr.send(JSON.stringify(data));
  }
}
