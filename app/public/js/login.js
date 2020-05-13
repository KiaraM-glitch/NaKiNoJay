$(document).ready(function() {

    // Referencing from our login.html
    var loginForm = $("form.login")
    var usernameInput = $("input#username-input")
    var passwordInput = $("input#password-input")

    // When the Submit button is click, we validate the username and password are not blank
    loginForm.on("submit", function(event) {
        event.preventDefault();

        var userData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        }

        // If there is NOT a username OR a password
        if (!userData.username) {
            console.log("There is no Username")
            return;
        } else if (!userData.password) {
            console.log("There is no Password")
            return;
        }


        loginUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
        // ---------
    })

    function loginUser(username, password) {
        $.post("/api/login", {
            username: username,
            password: password
        })
        .then(function() {
            console.log("login.js works ig")
            // window.location.replace("/index.html");
            // If there's an error, log the error
        })
          .catch(function(err) {
            console.log(err);
        });
    }







})

