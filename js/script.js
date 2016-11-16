  var form = $('#form-container');
  var playerName = $('#player').val();
  var button = $('submit-btn');
  var clicks = [0, 0];

  $(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "#3bdd9d");
    });
    $("input").blur(function(){
      $(this).css("background-color", "#ffffff");
    });
  });

  $('#submit-btn').click(function() {
    playerName = $('#player').val();
    $('label').append('  ' + playerName);
    $('#player').remove();
    $('button').remove();
    alert("Challenge Accepted");
    $('#greeting').html('Welcome ' + playerName + '. Click the cat!');

    $('#cat1-click').append('<p>Current click is:  ' + clicks[0] + ' </p>');
    $('#cat1-img').append('<img id = cat-image src="img/Elle.png" alt="a face of a cat with black coat">');

    $('#cat2-click').append('<p>Current click is:  ' + clicks[1] + ' </p>');
    $('#cat2-img').append('<img id = cat-image src="img/Elle.png" alt="a face of a cat with black coat">');
  });

  $('#cat1-img').click(function() {
    clicks[0] += 1;
    $('#cat1-click').html('<p>Current click is:  ' + clicks[0] + ' </p>');
    $('#cat1-click').fadeIn(100);
  });

  $('#cat2-img').click(function() {
    clicks[1] += 1;
    $('#cat2-click').html('<p>Current click is:  ' + clicks[1] + ' </p>');
    $('#cat2-click').fadeIn(100);
  });

  // $("#p1").hover(function(){
  //     alert("You entered p1!");
  // },
  // function(){
  //     alert("Bye! You now leave p1!");
  // });
