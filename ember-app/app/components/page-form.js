import Ember from 'ember';
import Validator from 'npm:validator';

export default Ember.Component.extend({
  didRender() {
    this.send('isUrlValid');
  },
  actions: {
    onSubmitClick(page) {
      this.sendAction('savePage', page);
    },
    isUrlValid() {
      this.set('isUrlValid', Validator.isURL(this.get('page.url')));
    }
  }
});
