import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  updatedAt: DS.attr('date'),
  createdAt: DS.attr('date')
});
