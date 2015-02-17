import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('contacts', { path: '/' }, function() {
    this.route('new');
    this.resource('contact', { path: ':contact_id' });
    this.route('edit', { path: ':contact_id/edit' });
  });
});

export default Router;
