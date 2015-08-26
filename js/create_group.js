$(function() {

  Parse.$ = jQuery;

  // Replace this line with the one on your Quickstart Guide Page
  Parse.initialize("0s0tCOHzCaM72KQpBBEoCbP0b3f8ft7TzfNF9DzU", "veqqdyOSdNttB7IsKmvMHrpsZSQGnCoNSCJQ45zN");
  var Group = new Parse.Object.extend("Group");
  
  $("#create-group").submit(function(event) {

    var className = $("class-name").val();
    var professor = $("teacher-name").val();
    var startTime = $("time-start").val();
    var endTime = $("time-end").val();
    var date = $("date").val();
    var location = $("location").val();
    var description = $("desc").val();

    var group = new Group();

    group.set("class_name", className);
    group.set("professor", professor);
    group.set("startTime", startTime);
    group.set("endTime", endTime);
    group.set("date", date);
    group.set("location", location);
    group.set("description", description);

    group.save(null, {
      success: function(group) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + group.id);
      },
      error: function(error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });

  });

});