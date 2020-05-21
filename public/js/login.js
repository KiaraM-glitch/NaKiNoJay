$(document).ready(function() {
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
            $('#username-input').tooltip('show')
            document.getElementById("username-input").style.backgroundColor = 'darkred';
            document.getElementById("username-input").style.color = 'white';

            return;
        } else if (!userData.password) {
            console.log("There is no Password")
            $('#password-input').tooltip('show')
            document.getElementById("password-input").style.backgroundColor = 'darkred';
            document.getElementById("password-input").style.color = 'white';
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
            window.location.replace("/witter");
        })
          .catch(function(err) {
            console.log(err);
        });
    }
})

