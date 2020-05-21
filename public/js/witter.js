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

      function createWitFunction(author, body, createdAt) {
        $.post("/api/witter", {
          author: author,
          body: body,
          createdAt: createdAt
        })
          .then(function() {

            var row = $(`<div class="wit row">`);
            row.append(`<div class="col-6"><p class="wit-author">@${author}</div>`);
            row.append(`<div class="col-6"><p class="wit-date">${moment(createdAt).format("h:mma on dddd")} </p></div>`)
            row.append(`</div>`)
            row.append(`<p>${body}</p>`);

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

          var row = $(`<div class="wit row">`);
            row.append(`<div class="col-6"><p class="wit-author">@${data[i].author}</div>`);
            row.append(`<div class="col-6"><p class="wit-date">${moment(data[i].createdAt).format("h:mma on dddd")} </p></div>`)
            row.append(`</div>`)
            row.append(`<p>${data[i].body}</p>`);

            $("#wits-area").prepend(row);
        }
      }
    })
  });
  