import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:contacts/edit');

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('it extends from Ember.Route', function(assert) {
  var route = this.subject();
  assert.ok(route instanceof Ember.Route);
});

test('renders the correct templates', function(assert) {
  var route = this.subject();
  var superCalled = false;
  var renderCalled = false;

  route._super = function() {
    superCalled = true;
  };

  route.render = function(template, options) {
    assert.equal(template, 'contacts/actions/edit');
    assert.equal(options.into, 'contacts');
    assert.equal(options.outlet, 'actions');
    renderCalled = true;
  };

  route.renderTemplate();

  assert.ok(superCalled);
  assert.ok(renderCalled);
});
