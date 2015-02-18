import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this._super();
    this.render('contacts/actions/edit', {
      into: 'contacts',
      outlet: 'actions'
    });
  }
});
