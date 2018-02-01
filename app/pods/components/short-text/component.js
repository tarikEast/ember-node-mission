import Ember from 'ember';

const ShortTextComponent = Ember.Component.extend({
});

ShortTextComponent.reopenClass({
  positionalParams: ['text']
})

export default ShortTextComponent;
