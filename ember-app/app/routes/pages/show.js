import Base from './base';

export default Base.extend({
  model(params) {
    return this.store.findRecord('page', params.id);
  }
});
