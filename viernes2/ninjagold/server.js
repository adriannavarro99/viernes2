var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.listen(8000);


app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));


mongoose.connect('mongodb://localhost/Ninja',{ useNewUrlParser: true });
require('./server/config/mongoo.js');

require('./server/config/route.js')(app);

