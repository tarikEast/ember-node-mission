export default function(server) {
  let users = server.createList('user', 3);
  let blogs = server.createList('blog', 5);

  blogs[0].update('author', users[0]);
  blogs[1].update('author', users[0]);
  blogs[2].update('author', users[1]);
  blogs[3].update('author', users[0]);
  blogs[4].update('author', users[2]);
}