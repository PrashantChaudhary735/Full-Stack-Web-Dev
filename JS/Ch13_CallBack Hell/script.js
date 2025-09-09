function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

makeHttpRequest("GET", "https://dummyjson.com/users", (data) => {
  // console.log(data);
  makeHttpRequest(
    "GET",
    `https://dummyjson.com/posts/user/${data.users[0].id}`,
    (data) => {
      console.log(data.posts[0]);
    }
  );
});
