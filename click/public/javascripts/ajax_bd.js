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