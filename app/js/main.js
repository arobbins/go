(function(){

    var $chatForm = $('.chat'),
        $chatInput = $('.chat-input'),
        $chatMessages = $('.chat-messages'),
        $loginForm = $('.form-login'),
        $loginFormUsername = $('.form-login-username'),
        $loginFormPassword = $('.form-login-password'),

        $registerForm = $('.form-register'),
        $formUsername = $('.form-username'),
        $formEmail = $('.form-email'),
        $formPassword = $('.form-password'),
        $formPasswordConfirm = $('.form-password-confirm'),
        $formRank = $('.form-rank'),
        socket = io(),
        Data = require('./data');

    $chatForm.remove();

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
                passwordConfirm = $formPasswordConfirm.val(),
                rank = $formRank.val();

            Data.users.push({
                username: username,
                password: password,
                email: email,
                loggedIn: false,
                rank: rank,
                record: {
                    wins: 0,
                    losses: 0
                },
                avatar: 'default',
                gameHistory: {}

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

            var formUsername = $loginFormUsername.val(),
                formPassword = $loginFormPassword.val();

            Data.users.once('value', function(dataSnapshot) {
                dataSnapshot.forEach(function(childSnapshot) {

                    var user = childSnapshot.val();

                    if(user.username === formUsername || user.email === formUsername){

                        if(user.password === formPassword){

                            var token = Data.tokenGenerator.createToken({
                                uid: "1",
                                username: user.username
                            });

                            Data.db.authWithCustomToken(token, function(error, authData){
                                if (error) {
                                    console.log("Login Failed!", error);
                                } else {
                                    console.log("Login Succeeded!", authData);
                                }
                            });

                            var me = childSnapshot.ref();

                            me.update({
                                "loggedIn": true
                            });

                        } else {
                            console.log('Password does not match.');
                        }

                    } else {
                        console.log('Username or email does not match.');
                    }

                });
            });

            // DB.authWithCustomToken(token, function(error, authData) {
            //   if (error) {
            //     console.log("Login Failed!", error);
            //   } else {
            //     console.log("Login Succeeded!", authData);
            //   }
            // });

        }
    });

    // USERS.on('child_added', function(snapshot){
    //     var user = snapshot.val();

    //     // Showing Firebase data
    //     $('body').append('<div style="margin:1em 0;">' + 'Username: ' + user.username + '<br />' + 'Password: ' + user.password + '<br />' + 'Email: ' + user.email + '<br />' + '</div>');
    // });

    // socket.on('entrance', function(data){
    //     console.log(data);
    // });


    // socket.on('test', function(data){
    //     console.log(data);
    // });


}());