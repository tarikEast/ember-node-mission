import Ember from 'ember';

const {
   Component
} = Ember;

const ComponentClass = Component.extend({});

ComponentClass.reopenClass({
  positionalParams: ['user']
})

export default ComponentClass;