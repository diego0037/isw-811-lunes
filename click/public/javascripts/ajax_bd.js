var id = 0;
var count = 0;
var Clicks = {
  getData: function() {
    return $.getJSON('/api/v1/clicks');
  },
  insert: function (data) {
    return $.post('/api/v1/clicks', data);
  },
  update: function (id, data) {
    return $.ajax({
      url: '/api/v1/clicks/' + id,
      type: 'PUT',
      dataType: 'json',
      data: data,
    });
  }
};

var refresh = function () {
  Clicks.getData().done(function (json) {
    json.clicks.forEach(function(click) {
      id = click.id;
      count = click.count;
      $('#clickdb').text(count);
    });
  })
};

$(document).ready(function() {
  refresh();

  $('#clickdb').click(function(event){
    if(id==0){
      Clicks.insert({count:1}).done(refresh);
      return;
    }
    count++;
    Clicks.update(id, {count: count}).done(refresh);
  });
  $('#click_reset_db').click(function(event){
    Clicks.update(id, {count: 0}).done(refresh);
  });
})
