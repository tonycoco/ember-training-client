import {
  mailTo
} from '../../../helpers/mail-to';
import { module, test } from 'qunit';

module('MailToHelper');

test('it works', function(assert) {
  var result = mailTo('fake@example.com');
  assert.ok(result);
});
