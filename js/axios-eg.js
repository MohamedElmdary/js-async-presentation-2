axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (res) {
        console.log("Result: ", res.data);
    })
    .catch(function (err) {
        console.log("Error: ", err);
    });