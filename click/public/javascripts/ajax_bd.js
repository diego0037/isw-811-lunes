var id = 0;
var BD = {
  getData: function() {
    return $.getJSON('/api/v1/db');
  },
  insert: function (data) {
    return $.post('/api/v1/db', data);
  },
  update: function (id, data) {
    return $.ajax({
      url: '/api/v1/db/' + id,
      type: 'PUT',
      dataType: 'json',
      data: data,
    });
  }
};

var refresh = function () {
  BD.getData().done(function (json) {
    json.db.forEach(function(db) {
      id = db.id;
      $('#bd').text(db.count);
    });
  })
};

$(document).ready(function() {
  refresh();
  $('.db').click(function(event){
    if(id!=0){
      BD.insert({count:1}).done(refresh);
      return;
    }
    BD.update(id, {count: count});
  })
})
