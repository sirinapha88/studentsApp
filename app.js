var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var locus = require("locus");
var methodOverride = require("method-override");
var studentRoutes = require("./controllers/students");


// middleware

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.use('/students', studentRoutes)


app.listen(3000, function(){
	console.log("Server started on port 3000");
});


