export default function(server) {
  let actor = server.create('actor');
  server.create('movie', { actor });
}