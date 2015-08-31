$(function() {

  Parse.$ = jQuery;

  Parse.initialize("0s0tCOHzCaM72KQpBBEoCbP0b3f8ft7TzfNF9DzU", "veqqdyOSdNttB7IsKmvMHrpsZSQGnCoNSCJQ45zN");

  // function ot create group. adds the data form the form into Parse db
  $("#createGroup").submit(function(event) {
    event.preventDefault();

    var currentUser = Parse.User.current();

    // gets all the variables from the form
    var userName = currentUser.get("username");
    var className = $("#class-name").val();
    var teacher = $("#teacher-name").val();
    var location = $("#location").val();
    var startTime = $("#time-start").val().toString();
    var endTime = $("#time-end").val().toString();
    var date = $("#date").val().toString();
    var description = $("#desc").val();
    var studyBuddy = currentUser.get("firstName");

// only able to create group if you are in the class
/*    var Class = Parse.Object.extend("Class");
    var createQuery = new Parse.Query(Class);
    createQuery.equalTo("class_name");
    createQuery.find({
      success: function(classes) {
        for(var i = 0; i < classes.length; i++) {
          if("#class-name" == classes[i]) {
            // save
            // create a new group object


          } else {
            // you are not in this class
            alert('You are not in that class');
          }

        }
      }
    });*/

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
        alert('New object created with objectId: ' + group.id);
      },
      error: function(error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });

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
      }
    });

  });

});
