import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'alt', 'title'],
  classNames: ['gravatar-image'],
  size: 60,
  email: '',
  title: '',
  default: '',

  src: Ember.computed('email', 'size', 'default', function() {
    var email = this.get('email');
    var size = this.get('size');
    var def = this.get('default');

    return '//www.gravatar.com/avatar/' + window.md5(email) + '?s=' + size + '&d=' + def;
  })
});
