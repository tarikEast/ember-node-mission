export default function(server) {
  let users = server.createList('user', Math.floor(Math.random() * 5) + 1);

  users.forEach(author => {
    server.createList('blog', Math.floor(Math.random() * 6) + 1, { author });
  });
}