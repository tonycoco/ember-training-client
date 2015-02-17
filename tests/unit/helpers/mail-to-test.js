import Ember from 'ember';
import {
  mailTo
} from '../../../helpers/mail-to';
import { module, test } from 'qunit';

module('MailToHelper');

test('it works', function(assert) {
  var result = mailTo('fake@example.com');
  assert.ok(result);
});

test('is a SafeString', function(assert) {
  var result = mailTo('fake@example.com');
  assert.ok(result instanceof Ember.Handlebars.SafeString);
});

test('creates a mailable link with the email', function(assert) {
  var result = mailTo('fake@example.com');
  assert.equal(result.toString(), '<a href="mailto:fake@example.com">fake@example.com</a>');
});
