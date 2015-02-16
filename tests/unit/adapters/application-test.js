import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:application', 'ApplicationAdapter');

test('it exists', function(assert) {
  var adapter = this.subject();
  assert.ok(adapter);
});

test('it is a ActiveModelAdapter', function(assert) {
  var adapter = this.subject();
  assert.ok(adapter instanceof DS.ActiveModelAdapter);
});

test('URL is "http://ember-training.herokuapp.com"', function(assert) {
  var adapter = this.subject();
  assert.equal(adapter.host, 'http://ember-training.herokuapp.com');
});

test('namespace is "api/v1"', function(assert) {
  var adapter = this.subject();
  assert.equal(adapter.namespace, 'api/v1');
});
