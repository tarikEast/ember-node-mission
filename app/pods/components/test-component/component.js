import Ember from 'ember';

export default Ember.Component.extend({
  author: Ember.computed.alias('movie.actor.firstName')
});
