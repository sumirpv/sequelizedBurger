// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  console.log("Button was clicked");
      var newDevourState = {
        devoured: newDevour
      };
      // Send the PUT request.
      console.log("id", id);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          //console.log("changed deovred to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.

      con.log( "click");
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured :"1"
        // ,
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger 
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".delete_btn").on("click", function(event){
      console.log("delete was clicked");
      var id=$(this).data("id");
     $.ajax("/api/burgers/" + id, {
       type : "DELETE"
     }).then(
       function(){
         console.log("Deleted Burger",id);
         location.reload();
       }
     );
    });
//deleting all the devoured burger
    $("#delete").on("click", function(event){
      if( burgers.devoured == "0"){
        var id=$(this).data("id");
        $.ajax("/api/burgers/" + id, {
          type : "DELETE"
        }).then(
          function(){
            console.log("Deleted Burger",id);
            location.reload();
          }
        );
      }
    })

  });
  
