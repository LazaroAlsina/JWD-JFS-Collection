



// By default a fetch request is a GET request
fetch("https://reqres.in/api/users")
.then(response => {
    console.log(response);
    return response.json();
})
.then(users => {
    console.log(users);
    
})