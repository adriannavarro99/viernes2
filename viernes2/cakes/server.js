//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/rate_my_cakes");
require("./server/config/database");


require("./server/config/routes.js")(app);


app.listen(8080, function(){
    console.log("Listening on port: 8080");
})