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
    $('.db').attr("id",'0');
    json.db.forEach(function(db) {
      id = db.id;
      $('#bd').text(db.count); 
    });
  })
};

$(document).ready(function() {
  refresh();  
})

