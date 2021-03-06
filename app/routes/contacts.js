import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('contact');
  },

  renderTemplate: function() {
    this._super();
    this.render('contacts/actions/initial', {
      into: 'contacts',
      outlet: 'actions'
    });
  }
});
