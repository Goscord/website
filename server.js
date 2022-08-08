const express = require("express");
const fs = require("fs");
const convertSass = require("sass-folder-converter");

// Convert SASS to CSS :
convertSass(__dirname + "/public/sass/", __dirname + "/public/css/");

// Create express instance :
global.server = express();

// Define public folder : 
server.use(express.static(__dirname + "/public"));

// Setup views folder :
server.set("views", __dirname + "/views");

// Setup view engine :
server.set("view engine", "ejs");

// Routes and 404 error :
fs.readdirSync(__dirname + "/routes/").forEach(fileName => require("./routes/" + fileName)); //TODO: ajout du support des sous dossier.

server.get("*", (request, response) => {
    response.redirect("/");
});

// Listen port :
server.listen(3002);
