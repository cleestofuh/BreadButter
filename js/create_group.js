$(function() {

  Parse.$ = jQuery;

  // Replace this line with the one on your Quickstart Guide Page
  Parse.initialize("0s0tCOHzCaM72KQpBBEoCbP0b3f8ft7TzfNF9DzU", "veqqdyOSdNttB7IsKmvMHrpsZSQGnCoNSCJQ45zN");

  $("#createGroup").submit(function(event) {
    event.preventDefault();

    var currentUser = Parse.User.current();

    var userName = currentUser.get("username");
    var className = $("#class-name").val();
    var teacher = $("#teacher-name").val();
    var location = $("#location").val();
    var startTime = $("#time-start").val().toString();
    var endTime = $("#time-end").val().toString();
    var date = $("#date").val().toString();
    var description = $("#desc").val();
    var studyBuddy = currentUser.get("firstName");

    // create a new group object
    var Group = Parse.Object.extend("Group");
    var group = new Group();

    // set fields in group object

    group.set("username", userName);
    group.set("classNames", className);
    group.set("teacher", teacher);
    group.set("location", location);
    group.set("startTime", startTime);
    group.set("endTime", endTime);
    group.set("date", date);
    group.set("description", description);
    group.set("studybuddy", studyBuddy);


    // save the group
    group.save(null, {
      success: function(group) {
        // Execute any logic that should take place after the object is saved.
        alert('Class added!');
      },
      error: function(error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });

    currentUser.add("createdGroups", group);
    currentUser.save(null, {
      success: function(currentUser) {
        // Execute any logic that should take place after the object is saved.
        
      },
      error: function(error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });

/*    var Class = Parse.Object.extend("Class");
    var clas= new Class();

    var classNames;
    classNames.push(clas.get("class-name"));

    for(index = 0; index < fruits.length; index++) {
      if(classNames[index].equals(className)) {
        clas.addUnique("groupArray", group);
=======

    // add the group to the groupArray in the user who created it
    currentUser.add("createdGroups", group);
    currentUser.save(null, {
      success: function(currentUser) {
        // Execute any logic that should take place after the object is saved.
        alert('SUCCESS');
      },
      error: function(error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('FAILURE');
>>>>>>> 4d3598db2eba3166f40c586b425724c2b8efceea
      }
    }*/


  });

});
