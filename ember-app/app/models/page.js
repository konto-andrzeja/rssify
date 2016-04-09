import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  url: attr('string'),
  cssSelectors: {
    title: attr('string'),
    description: attr('string'),
    article: {
      url: attr('string'),
      title: attr('string'),
      description: attr('string'),
    }
  }
});
