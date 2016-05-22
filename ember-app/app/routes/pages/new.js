import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('page', { name: 'New page', url: '' });
  },
  actions: {
    savePage(page) {
      page.save().then(() => this.transitionTo('pages.show', page.id));
    },
    willTransition(transition) {
      var page = this.controller.get('model');
      if(page.get('hasDirtyAttributes')) {
        if (confirm("The page wasn't saved yet, are you sure you want to leave this form?")) {
          page.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
