import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('contact');
  },

  renderTemplate: function() {
    this._super();
    this.render('contacts/actions/new', {
      into: 'contacts',
      outlet: 'actions'
    });
  },

  actions: {
    save: function() {
      var self = this;
      var contact = this.controller.get('model');
      contact.save().then(function() {
        return self.transitionTo('contact', contact);
      }, function() {
        // nothing
      });
    },

    cancel: function() {
      var contact = this.controller.get('model');
      contact.deleteRecord();
      return this.transitionTo('contacts');
    }
  }
});
