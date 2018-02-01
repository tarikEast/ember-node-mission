import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('user', 1);
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('blog', {});
  }
});
