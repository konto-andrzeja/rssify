export default function() {
  this.post('/pages', function(db, request) {
    var attrs = JSON.parse(request.requestBody).page;
    var page = db.pages.insert(attrs);
    return {
      data: {
        type: 'pages',
        id: page.id,
        attributes: attrs
      }
    };
  });

  this.get('/pages', function(db) {
    return {
      data: db.pages.map(attrs => ({ type: 'pages', id: attrs.id, attributes: attrs }))
    };
  });

  this.get('/pages/:id', function(db, request) {
    let id = request.params.id;
    return {
      data: {
        type: 'pages',
        id: id,
        attributes: db.pages.find(id)
      }
    };
  });

  this.del('/pages/:id', (db, request) => {
    let id = request.params.id;
    db.pages.remove(id);
    return {};
  }, 204);
}
