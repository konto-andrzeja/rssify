import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePage(page) {
      return page.save();
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
