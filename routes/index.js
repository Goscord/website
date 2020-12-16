const fs = require("fs");

server.get("/", (request, response) => {
    let currentCode = fs.readFileSync(__dirname + "/../others/code/1.0.0.go", {encoding: "utf-8"});
    
    response.render("index", {
        currentCode
    });
});