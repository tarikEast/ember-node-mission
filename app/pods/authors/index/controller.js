import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        delete(author) {
            this.send("deleteAuthor", author);
        }
    }
})