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
    save: function() {
      var self = this;
      var contact = this.controller.get('model');
      contact.save().then(function() {
        return self.transitionTo('contact', contact);
      });
    },

    cancel: function() {
      var contact = this.controller.get('model');
      contact.rollback();
      return this.transitionTo('contact', contact);
    }
  }
});
