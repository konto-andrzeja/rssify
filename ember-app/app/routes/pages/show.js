import Base from './base';

export default Base.extend({
  model(params) {
    return this.store.findRecord('page', params.id);
  },
  actions: {
    savePage(page) {
      this._super(page).then(() => {
        page.set('successMessage', 'Feed is correctly generated!');
      });
    }
  }
});
