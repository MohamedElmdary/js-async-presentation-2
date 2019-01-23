function getTodo(cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                cb(null, xhr.responseText);
            } else {
                cb(xhr.statusText);
            }
        }
    };
    xhr.send();
}

getTodo(function (error, data) {
    if (error) {
        console.log("Error: ", error);
    } else {
        console.log("data: ", data);
    }
});