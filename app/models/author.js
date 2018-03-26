import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    image: DS.attr(),
    fullName: Ember.computed('firstName', 'lastName', function() {
        return `${this.get('lastName')}, ${this.get('firstName')}`;
    }),
    bio: DS.attr(),
    blogs: DS.hasMany('blog')
})