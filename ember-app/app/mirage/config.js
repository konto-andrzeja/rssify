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
}
