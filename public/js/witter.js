$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.username);

      var newWitForm = $("form.new-wit")
      var authorInput = (data.username)
      var bodyInput = $("input#wit-input")

      // ===================
      // GETTING OUR NEW WIT TO TAKE THE DATA AND PREP IT FOR
      // THE API-ROUTES SO IT CAN APPLY TO MYSQL

      newWitForm.on("submit", function(event) {
        event.preventDefault();

        var userData = {
          author: authorInput,
          body: bodyInput.val().trim()
        }

        createWitFunction(userData.author, userData.body)
        bodyInput.val("");
      })

      function createWitFunction(author, body) {
        $.post("/api/witter", {
          author: author,
          body: body
        })
          .then(function() {

            var row = $("<div>");
      
            row.append("<p>" + author + " Had a Witty Thought: </p>");
            row.append("<p>" + body + "</p>");
            row.append("<hr>")
            // row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
      
            $("#wits-area").prepend(row);
        
          })
        .catch(handleNewWitErr)
      }


      // If there's an error:

      function handleNewWitErr(err) {
        console.log(err.responseJSON)
        console.log(500)
      }
    });

    $.get("/api/all_wits").then(function(data) {
      if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {
    
          var row = $("<div>");
      
            row.append("<p>" + data[i].author + " Had a Witty Thought: </p>");
            row.append("<p>" + data[i].body + "</p>");
            row.append("<hr>")
            // row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
      
            $("#wits-area").prepend(row);
    
        }
      }
    })

  });
  