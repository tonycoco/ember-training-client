import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this._super();
    this.render('contacts/actions/new', {
      into: 'contacts',
      outlet: 'actions'
    });
  }
});
