$(function() {

  Parse.$ = jQuery;

  // Replace this line with the one on your Quickstart Guide Page
  Parse.initialize("0s0tCOHzCaM72KQpBBEoCbP0b3f8ft7TzfNF9DzU", "veqqdyOSdNttB7IsKmvMHrpsZSQGnCoNSCJQ45zN");

  $("#addClass").submit(function(event) {
    event.preventDefault();

    var classSearchName = $("#class-search").val();

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

  });

});
