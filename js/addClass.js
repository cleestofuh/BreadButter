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
        }

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

          // TODO: if the user already has the class added, do not add
          //alert("ZERO");
          //var classQuery = new Parse.Query(currentUser);

          /*var fetchArray = currentUser.fetch("classArray");
          alert("fetch: " + fetchArray);
          for(var i = 0; i < fetchArray.length; i++) {
            alert("INSIDE");
            var object = fetchedArray[i];
            alert("STEP");
            alert(object.id + ' - ' + object.get("class_name"));
          }

          currentUser.fetch("classArray").then(function(fetchedClassArray) {
            alert("ONE");

            alert("size: " + fetchedClassArray.length);
            for(var i = 0; i < fetchedClassArray.length; i++) {
              alert("INSIDE");
              var object = fetchedClassArray[i];
              alert("Curr Class obj id: " + object.id);
            }
          });//*/

          // WORKING------------------------------------------------------
          // user did not add the class yet
          currentUser.add("classArray", objId);
          currentUser.save(null, {
            success: function(currentUser) {
              alert('Current class added with classObj id: ' + objId);
            },
            error: function(error){
              alert('Failed to create new object, with error code: ' + error.message);
            }
          });
          // END WORKING-------------------------------------------------
        }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }

    });
    $("#noClassText").hide();

  });

/* ADD NEW CLASS
  $("#addClass").submit(function(event) {
    event.preventDefault();

    var classSearchName = $("#class-search").val();
    //var classSearchName = document.getElementById("#class-search").value;

    var newClass = document.createElement("div");
    var className = document.createTextNode(classSearchName);

    newClass.style.border = "1px solid black";
		newClass.style.display = "inline";
		newClass.style.background = "#FFF";
		newClass.style.float = "left";
		newClass.style.padding = "25px 150px 25px 150px";
		newClass.style.align = "center";
		newClass.style.fontSize = "21px";
		newClass.style.color = "#4f75ca";

		newClass.appendChild(className);
    document.body.appendChild(newClass);
  });
*/
});
