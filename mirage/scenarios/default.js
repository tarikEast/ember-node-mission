export default function(server) {
  let users = server.createList('user', 5);

  users.forEach(user => {
    let userBlogs = server.createList('blog', Math.floor(Math.random() * 5));

    userBlogs.forEach(blog => {
      blog.update('author', user);
    });
  });
}