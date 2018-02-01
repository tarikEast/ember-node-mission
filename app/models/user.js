import DS from 'ember-data';
import { computed }  from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  profilePic: DS.attr('string'),
  blogs: DS.hasMany('blog'),
  name: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`
  })
});
