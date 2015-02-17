import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:contacts');

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('it extends from Ember.Route', function(assert) {
  var route = this.subject();
  assert.ok(route instanceof Ember.Route);
});

test('sets the model to all of the contacts', function(assert) {
  var expected = [Ember.Object.extend({ email: 'fake@example.com' })];
  var route = this.subject();
  route.store = {
    find: function(type) {
      assert.equal(type, 'contact');
      return expected;
    }
  };

  assert.equal(route.model(), expected);
});
