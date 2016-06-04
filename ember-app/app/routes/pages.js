import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('page');
  },
  actions: {
    deletePage(page) {
      if(confirm('"' + page.get('name') + '" will be deleted permanently. Are you sure?')) {
        page.destroyRecord().then(() => this.transitionTo('pages.new'));
      }
    }
  }
});
