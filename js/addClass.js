$(function() {

  Parse.$ = jQuery;

  // Replace this line with the one on your Quickstart Guide Page
  Parse.initialize("0s0tCOHzCaM72KQpBBEoCbP0b3f8ft7TzfNF9DzU", "veqqdyOSdNttB7IsKmvMHrpsZSQGnCoNSCJQ45zN");

  $("#addClass").submit(function(event) {
    event.preventDefault();

    var currentUser = Parse.User.current();

    var classSearchName = $("#class-search").val();
    var currentCount;
    var objId;

    // if class exists, add the existing class to the user's classArray
    var currentClasses = Parse.Object.extend("Class");
    var query = new Parse.Query(currentClasses);

    query.equalTo("class_name", classSearchName);
    query.find({
      success: function(results) {
        alert("Successfully retrieved class " + results);
        currentCount = results.length;
        alert("currentCount: " + currentCount);

        objId = results;
        for(var i = 0; i < results.length; i++) {
          var object = results[i];
          alert(object.id + ' - ' + object.get('class_name'));
        }//*/

        if(currentCount == 0){
          var Class = Parse.Object.extend("Class");
          var classObj = new Class();

          classObj.set("class_name", classSearchName);

          classObj.save(null, {
            success: function(classObj) {
              // Execute any logic that should take place after the object is saved.
              alert('New object created with objectId: ' + classObj.id);
            },
            error: function(error) {
              // Execute any logic that should take place if the save fails.
              // error is a Parse.Error with an error code and message.
              alert('Failed to create new object, with error code ' + error.message);
            }
          });

          currentUser.add("classArray", classObj);
          currentUser.save(null, {
            success: function(currentUser) {
              alert('New class added with classObj id: ' + classObj.id);
            },
            error: function(error) {
              alert('Failed to create new object, with error code: ' + error.message);
            }
          });
        }
        else { // add class to user only

          currentUser.add("classArray", objId);
          currentUser.save(null, {
            success: function(currentUser) {
              alert('Current class added with classObj id: ' + objId);
            },
            error: function(error){
              alert('Failed to create new object, with error code: ' + error.message);
            }
          });
        }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });//*/

    // else, add the class to the database of classes
    /*var Class = Parse.Object.extend("Class");
    var classObj = new Class();

    classObj.set("class_name", classSearchName);*/

    //alert("currentCount: " + currentCount);
    // add class to database and to user
    /*if(currentCount == 0){
      alert("TEST");
      var Class = Parse.Object.extend("Class");
      var classObj = new Class();

      classObj.set("class_name", classSearchName);

      classObj.save(null, {
        success: function(classObj) {
          // Execute any logic that should take place after the object is saved.
          alert('New object created with objectId: ' + classObj.id);
        },
        error: function(error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          alert('Failed to create new object, with error code ' + error.message);
        }
      });

      currentUser.add("classArray", classObj);
      currentUser.save(null, {
        success: function(currentUser) {
          alert('New class added with classObj id: ' + classObj.id);
        },
        error: function(error) {
          alert('Failed to create new object, with error code: ' + error.message);
        }
      });
    }
    else { // add class to user only

      currentUser.add("classArray", objId);
      currentUser.save(null, {
        success: function(currentUser) {
          alert('New class added with classObj id: ' + objId);
        },
        error: function(error){
          alert('Failed to create new object, with error code: ' + error.message);
        }
      });
    }//*/
  });

});
