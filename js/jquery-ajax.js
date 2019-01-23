$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    method: "GET"
})
    .done(function (data) {
        console.log("data: ", data);
    })
    .fail(function (error) {
        console.log("error: ", error);
    });
