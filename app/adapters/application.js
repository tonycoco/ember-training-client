import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://ember-training.herokuapp.com',
  namespace: 'api/v1'
});
