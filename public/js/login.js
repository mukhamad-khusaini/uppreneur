const BASE_URL = "https://uppreanur.herokuapp.com"; //https://uppreanur.herokuapp.com

if (window.location.pathname == "/login") {
    if (document.cookie.split("=")[0] === "token") {
        location = `${BASE_URL}`;
    } else {
        if (window.location.search) {
            if (window.location.search.split("=")[1] == "falsePassword") {
                document.querySelector(".login .alert").style.display = "block";
            }
        }
    }
}

function signUpRedirect() {
    location = "/signUp";
}

function redirect() {
    location.href = `${BASE_URL}/oauth/login`;
}
