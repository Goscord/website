const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const convertSass = require("sass-folder-converter");

// Convert SASS to CSS :
convertSass(__dirname + "/public/sass/", __dirname + "/public/css/");

// Create express instance :
global.server = express();

// Setup the logger :
server.use(require("morgan")("dev"));

// Define public folder : 
server.use(express.static(__dirname + "/public"));

// Setup views folder :
server.set("views", __dirname + "/views");

// Setup view engine :
server.set("view engine", "ejs");

// Add body parser middleware for get body content (for post method) :
server.use(bodyParser.json()); // support json encoded bodies
server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Routes and 404 error :
fs.readdirSync(__dirname + "/routes/").forEach(fileName => require("./routes/" + fileName)); //TODO: ajout du support des sous dossier.

server.get("*", (request, response) => {
    response.render("error");
    response.status(404);
});

// Listen port :
server.listen(3000);
