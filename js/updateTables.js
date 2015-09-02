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
        var date = new Date(object.get('date'));
        /* Doesn't work for a date like Jan 1, 2015. Basically the format decreasing the month/day by 1 */
        var formattedDate = ((date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' +  date.getFullYear() );

        //var startTime = new Date(object.get('startTime'));
        //var endTime = new Date(object.get('endTime'));

        var startTime = object.get('startTime').split(':');
        var startHours = Number(startTime[0]);
        var startMinutes = Number(startTime[1]);

        var formatStartTime = "" + ((startHours > 12) ? startHours - 12 : startHours);
            formatStartTime += (startMinutes < 10) ? ":0" + startMinutes : ":" + startMinutes;
            formatStartTime += (startHours >= 12) ? " PM" : " AM";

        var endTime = object.get('endTime').split(':');
        var endHours = Number(endTime[0]);
        var endMinutes = Number(endTime[1]);

        var formatEndTime = "" + ((endHours > 12) ? endHours - 12 : endHours);
            formatEndTime += (endMinutes < 10) ? ":0" + endMinutes : ":" + endMinutes;
            formatEndTime += (endHours >= 12) ? " PM" : " AM";


        (function($) {
          $('#table-info').append('<tr><td>' + formattedDate +
                                  '</td><td>' + formatStartTime + ' - ' + formatEndTime +
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
