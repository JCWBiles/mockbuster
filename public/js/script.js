jQuery(function($){
  var socket = io.connect('localhost:3001');
  var $nickForm = $('#setNick');
  var $nickError = $('#nickError');
  var $nickBox = $('#nickname');
  var $users = $('#users');
  var $messageForm = $('#send-message');
  var $messageBox = $('#message');
  var $chat = $('#chat');

  $nickForm.submit(function(e){
    e.preventDefault();
    socket.emit('new user', $nickBox.val(), function(data){
      if(data) {
        $('#nickWrap').hide();
        $('#contentWrap').show();
      }else {
        $nickError.html('That username is already taken! Try again.');
      }
    });
    $nickBox.val('');
  });

  socket.on('usernames', function(data){
    var html = '';
    for (var i = 0; i < data.length; i++) {
      html += data[i] + '<br>'
    }
    $users.html(html);
  })

  $messageForm.submit(function(e){
    e.preventDefault();
    socket.emit('send message', $messageBox.val(), function(data){
      $chat.append('<span class ="error">' + data + '</span><br>');
    });
    $messageBox.val('');
  });
  socket.on('load old msgs', function(docs){
    for (var i = docs.length-1; i >= 0;  i--) {
      displayMsg(docs[i]);
    }
  });

  socket.on('new message', function(data){
    displayMsg(data)[0].id;
  });

function displayMsg(data){
    $chat.append('<span class ="msg"><b>' + data.name + ': </b>' + data.message + '</span><br>');
}

  socket.on('private message', function(data){
    // to add private message as a new div create a and append to different div
    $chat.append('<span class ="private"><b>' + data.name + ': </b>' + data.message + '</span><br>');
  })
});
