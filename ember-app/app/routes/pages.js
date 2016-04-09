import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        name: 'Sample page 1',
        url: 'http://www.samplepage1.com',
        cssSelectors: {
          title: '.title',
          description: '.description',
          article: {
            url: '.url',
            title: '.title',
            description: '.description',
          }
        }
      },
      {
        id: 2,
        name: 'Sample page 2',
        url: 'http://www.samplepage2.com',
        cssSelectors: {
          title: '.title',
          description: '.description',
          article: {
            url: '.url',
            title: '.title',
            description: '.description',
          }
        }
      }
    ];
  }
});
