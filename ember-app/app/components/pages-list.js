import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePage(page) {
      if(confirm('"' + page.get('name') + '" will be deleted permanently. Are you sure?')) {
        page.destroyRecord();
      }
    }
  }
});
