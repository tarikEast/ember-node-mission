export default function(server) {
    let authors = server.createList('author', Math.floor(Math.random() * 5) + 1);
    
    authors.forEach(author => {
        server.createList('blog',  Math.floor(Math.random() * 5) + 1, { author });
    });
}