import Ember from 'ember';
import { computed }  from '@ember/object';

const BlogCardComponent = Ember.Component.extend({
  'data-test-blog-id': computed.readOnly('blog.id')
});

BlogCardComponent.reopenClass({
  positionalParams: ['blog']
})

export default BlogCardComponent;
