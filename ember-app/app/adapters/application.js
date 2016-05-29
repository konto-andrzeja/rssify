import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api/v1',
  headers: Ember.computed(function() {
    var token = document.cookie.match(/X\-CSRF\-TOKEN\=([^;]*)/)[1];
    return {
      'X-CSRF-TOKEN': decodeURIComponent(token)
    };
  }).volatile()
});
