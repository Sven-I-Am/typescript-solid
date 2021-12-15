"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var AdminUser_1 = require("./AdminUser");
var GoogleBotUser_1 = require("./GoogleBotUser");
var passwordElement = document.querySelector('#password');
var typePasswordElement = document.querySelector('#typePassword');
var typeGoogleElement = document.querySelector('#typeGoogle');
var typeFacebookElement = document.querySelector('#typeFacebook');
var loginAsAdminElement = document.querySelector('#loginAsAdmin');
var loginAsBotElement = document.querySelector('#loginAsBot');
var resetPasswordElement = document.querySelector('#resetPassword');
var guest = new User_1.User();
var admin = new AdminUser_1.Admin();
var gBot = new GoogleBotUser_1.GoogleBot();
document.querySelector('#login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var user;
    if (loginAsAdminElement.checked) {
        user = admin;
    }
    else if (loginAsBotElement.checked) {
        user = gBot;
        user.setGoogleToken('secret_token_google');
    }
    else {
        user = guest;
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    }
    debugger;
    var auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = user.getFacebookLogin('secret_token_fb');
            break;
    }
    if (auth) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', function (event) {
    event.preventDefault();
    var user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
