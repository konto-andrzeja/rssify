import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'name'(i) { return `Page ${i}`; },
  'url'() { return faker.internet.url(); },
  'title-css-sel': '.title',
  'desc-css-sel': '.description',
  'art-url-css-sel': '.url',
  'art-title-css-sel': '.title',
  'art-desc-css-sel': '.description'
});
