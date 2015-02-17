import Ember from 'ember';

export function mailTo(email) {
  var str = '';

  str += '<a href="mailto:' + email + '">';
  str += email;
  str += '</a>';

  return new Ember.Handlebars.SafeString(str);
}

export default Ember.Handlebars.makeBoundHelper(mailTo);
