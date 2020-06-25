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
console.log("outside");
getUserRepos();