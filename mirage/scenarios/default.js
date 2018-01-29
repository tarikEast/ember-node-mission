export default function(server) {
  let users = server.createList('user', 5);

  users.forEach(user => {
    let blogs = server.createList('blog', Math.floor(Math.random() * 11));

    blogs.forEach(blog => {
      blog.update('author', user);
    });
  });
}