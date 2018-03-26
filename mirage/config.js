export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.namespace = '/api';

  this.get('/current', (schema) => {
    schema.authors.find(1);
  });
  this.get('/authors', function(schema, request) {
    let authors = [];
    if (Object.keys(request.queryParams).length === 0) {
      authors = schema.authors.all();
    } else {
      let id = request.queryParams['filter[id]'];
      authors = schema.authors.where({ id })
    }
    return authors;
  });
  this.get('/blogs');
  this.get('/authors/:id');
  this.get('/blogs/:id');
  this.del('/authors/:id');  
}
