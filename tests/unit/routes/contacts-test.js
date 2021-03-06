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

test('renders the correct templates', function(assert) {
  var route = this.subject();
  var superCalled = false;
  var renderCalled = false;

  route._super = function() {
    superCalled = true;
  };

  route.render = function(template, options) {
    assert.equal(template, 'contacts/actions/initial');
    assert.equal(options.into, 'contacts');
    assert.equal(options.outlet, 'actions');
    renderCalled = true;
  };

  route.renderTemplate();

  assert.ok(superCalled);
  assert.ok(renderCalled);
});
