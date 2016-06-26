import Ember from 'ember';
import Validator from 'npm:validator';

export default Ember.Component.extend({
  didRender() {
    this.send('isUrlInvalid');
  },
  actions: {
    onSubmitClick(page) {
      this.set('page.successMessage', '');
      this.sendAction('savePage', page);
    },
    isUrlInvalid() {
      this.set('isUrlInvalid', !Validator.isURL(this.get('page.url')));
    }
  }
});
