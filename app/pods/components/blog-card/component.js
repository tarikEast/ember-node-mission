import Ember from 'ember';

const BlogCardComponent = Ember.Component.extend({
});

BlogCardComponent.reopenClass({
  positionalParams: ['blog']
})

export default BlogCardComponent;
