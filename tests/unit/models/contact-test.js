import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('contact');

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('it extends from DS.Model', function(assert) {
  var model = this.subject();
  assert.ok(model instanceof DS.Model);
});

test('it is a Contact', function(assert) {
  var model = this.subject();
  var Contact = this.store().modelFor('contact');
  assert.ok(model instanceof Contact);
});
