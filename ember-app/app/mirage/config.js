export default function() {
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
