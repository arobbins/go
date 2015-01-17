(function(){

    var socket = io(),
        $chatForm = $('.chat'),
        $chatInput = $('.chat-input'),
        $chatMessages = $('.chat-messages'),
        $loginForm = $('.form-login'),
        $loginFormUsername = $('.form-login .form-username'),
        $registerForm = $('.form-register'),
        $formUsername = $('.form-username'),
        $formEmail = $('.form-email'),
        $formEmailLogin = $('.form-email-login'),
        $formPassword = $('.form-password'),
        $formPasswordLogin = $('.form-password-login'),
        $formPasswordConfirm = $('.form-password-confirm'),
        DB = new Firebase('https://torid-heat-9003.firebaseIO.com'),
        USERS = DB.child("users"),
        mod = require('./modules');

    mod.sayHi('Hi!');

    // Hiding for now
    $chatForm.remove();

    // $chatForm.submit(function(e){
    //     e.preventDefault();
    //     socket.emit('chat message', $chatInput.val());
    //     $chatInput.val('');
    //     return false;
    // });

    socket.on('chat message', function(data){
        $chatMessages.append($('<li>').text(data));
    });

    $registerForm.validate({
        debug: true,
        rules: {
            password: "required",
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function(form) {

            var username = $formUsername.val(),
                email = $formEmail.val(),
                password = $formPassword.val(),
                passwordConfirm = $formPasswordConfirm.val();

            USERS.push({
              username    : username,
              password : password,
              email    : email

            }, function(error) {
              if (error === null) {
                console.log("User created successfully");

              } else {
                console.log("Error creating user:", error);
              }
            });
        }
    });

    $loginForm.validate({
        debug: true,
        submitHandler: function(form) {

            var email = $formEmailLogin.val(),
                password = $formPasswordLogin.val();

            DB.authWithCustomToken(token, function(error, authData) {
              if (error) {
                console.log("Login Failed!", error);
              } else {
                console.log("Login Succeeded!", authData);
              }
            });

        }
    });

    USERS.on('child_added', function(snapshot){
        var user = snapshot.val();

        // Showing Firebase data
        $('body').append('<div style="margin:1em 0;">' + 'Username: ' + user.username + '<br />' + 'Password: ' + user.password + '<br />' + 'Email: ' + user.email + '<br />' + '</div>');
    });

    alert('Made it');

}());