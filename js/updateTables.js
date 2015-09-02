Parse.initialize("0s0tCOHzCaM72KQpBBEoCbP0b3f8ft7TzfNF9DzU", "veqqdyOSdNttB7IsKmvMHrpsZSQGnCoNSCJQ45zN");

  var Group = Parse.Object.extend("Group");
  var query = new Parse.Query(Group);
  var myScores = '';

  query.equalTo("classNames", "COGS 187A");
  query.find({
    success: function(results) {
      //alert("results: " + results);
      for(var i = 0; i < results.length; i++) {
        //alert("loop");
        var object = results[i];
        //alert("object date: " + object.get('date'));
        (function($) {
          $('#table-info').append('<tr><td>' + object.get('date') +
                                  '</td><td>' + object.get('startTime') + ' - ' + object.get('endTime') +
                                  '</td><td>' + object.get('teacher') +
                                  '</td><td>' + object.get('location') +
                                  '</td><td>' + object.get('description') +
                                  '</td><td> 3' +
                                  '</td><td>' + object.get('studybuddy') + '</td><td>' +
                                  '<button type="button" class="btn btn-logout btn-block">Join</button>' + '</td></tr>');
          })(jQuery);
      }
      //$('#table-info').append('<tr><td>' + object.get('studybuddy') + '</td></tr>');
    },

  });

/*
Parse.initialize("Y9G4OfBMyF5tWgLUddcaPCGNAxi3DsxNVcSCMd52", "m7mOLrORBEYyZsyjWgkZIuW9KYH8crUsRxqSmNc6");

    var GameScore = Parse.Object.extend("GameScore");
    var query = new Parse.Query(GameScore);
    query.equalTo("playerName", "Dan Stemkoski");
    query.find({
    success: function(results) {
    //alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      (function($) {
   $('#results-table').append('<tr><td>' + object.get('playerName') + '</td><td>' + object.get('score') + '</td></tr>');
})(jQuery);

      //alert(object.id + ' - ' + object.get('playerName'));
    }
    },
    error: function(error) {
    alert("Error: " + error.code + " " + error.message);
    }
  });

var myScores='';
...
success: function(results) {
for (var i = 0; i < results.length; i++) {
  var object = results[i];
  myScores+='<tr><td>' + object.get('playerName') + '</td><td>' + object.get('score') + '</td></tr>';
}
  (function($) {
      $('#results-table').append(myScores);
  })(jQuery);
}*/
