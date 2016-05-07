import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  url: attr('string'),
  titleCssSel: attr('string'),
  descCssSel: attr('string'),
  artUrlCssSel: attr('string'),
  artTitleCssSel: attr('string'),
  artDescCssSel: attr('string'),
});
