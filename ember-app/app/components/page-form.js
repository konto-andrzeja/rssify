import Ember from 'ember';
import Validator from 'npm:validator';

export default Ember.Component.extend({
  didRender() {
    this.send('isUrlValid');
  },
  actions: {
    isUrlValid() {
      this.set('isUrlValid', Validator.isURL(this.get('page.url')));
    }
  }
});
