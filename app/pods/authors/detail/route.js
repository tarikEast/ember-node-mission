import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.query('author', {
            filter: {
                id: params.id
            }
        });
    },
    setupController(controller, model) {
        this._super(...arguments);
        controller.set('model', model.objectAt(0));
    }
});
