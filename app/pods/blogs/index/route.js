import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },
  actions: {
    goToBlog(blogId) {
      this.transitionTo('blogs.show', blogId)
    },
    goToAddBlog() {
      this.transitionTo('blogs.add')
    }
  }
});
