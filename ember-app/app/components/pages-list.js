import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onDeleteClick(page) {
      this.sendAction('deletePage', page);
    }
  }
});
