fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET"
})
    .then(function (data) {
        return data.json();
    })
    .then(function (res) {
        console.log("result: ", res);
    })
    .catch(function (err) {
        console.log("Error: ", err);
    });

