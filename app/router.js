import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('show', { path: '/:user_id' }, function() {
      this.route('blogs');
    });
  });
  this.route('blogs', function() {
    this.route('show', { path: '/:blog_id'});
  });
});

export default Router;
