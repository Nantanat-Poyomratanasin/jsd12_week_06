//fetch is function , promise is class
//fetch("URL API server")
//return json --> convert to object
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {   //resonse is promise object
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Something went wrong!");
    })
