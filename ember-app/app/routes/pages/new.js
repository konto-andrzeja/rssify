import Base from './base';

export default Base.extend({
  model() {
    return this.store.createRecord('page', { name: 'New page', url: '' });
  },
  actions: {
    savePage(page) {
      this._super(page).then(() => this.transitionTo('pages.show', page.id));
    }
  }
});
