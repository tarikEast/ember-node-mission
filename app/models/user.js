import DS from "ember-data";
import { computed }  from '@ember/object';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  firstName: attr(),
  lastName: attr(),
  name: computed('firstName', 'lastName', function(){
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  jobTitle: attr(),
  age: attr(),
  profilePic: attr(),
  blogs: hasMany('blog'),
  blogsCount: computed('blogs.[]', function() {
    let count = this.hasMany('blogs').ids().length;
    return count ? count : 0;
  })
})