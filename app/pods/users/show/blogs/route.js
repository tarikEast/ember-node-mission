import Ember from 'ember';

const {
  RSVP
} = Ember;

export default Ember.Route.extend({
  model() {
    const user = this.modelFor('users.show');
    return RSVP.hash({
      user,
      blogs: user.get('blogs')
    })
    // const userId = this.modelFor('users.show');
    // return RSVP.hash({
    //   blogs: this.store.query('blog', { filter : { 'author_id': userId }}),
    //   user: this.store.findRecord('user', userId)
    // });
  }
});
