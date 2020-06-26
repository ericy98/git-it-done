var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUserRepos = function(user) {
    // formate github api 
    var apiURL = "https://api.github.com/users/" + user + "/repos";

    // make request to the url
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    // get value from input
    var username = nameInputEl.value.trim();

    if(username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);
