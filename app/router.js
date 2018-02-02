import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movies');
  this.route('blogs', { path: 'blog'}, function() {
    this.route('show', { path: '/:blog_id' }, function() {
      this.route('add');
    });
    this.route('add');
  });
});

export default Router;
