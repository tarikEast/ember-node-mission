import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addBlog() {
      let blogModel = this.store.createRecord('blog', this.get('blog'));
      blogModel.set('author', this.get('model'));
      blogModel.set('datePublished', new Date());
      blogModel.save().then(() => {
        this.transitionToRoute('blogs.index');
      }, () => {
        blogModel.deleteRecord();
      })
    }
  }
});
