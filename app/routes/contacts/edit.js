import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this._super();
    this.render('contacts/actions/edit', {
      into: 'contacts',
      outlet: 'actions'
    });
  },

  actions: {
    save: function(contact) {
      return this.transitionTo('contact', contact);
    },

    cancel: function(contact) {
      return this.transitionTo('contact', contact);
    }
  }
});
