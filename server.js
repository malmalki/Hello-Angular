var express = require("express");
var app = express();

app.listen(8000, () => console.log("listening on port 8000"));

app.use(express.static( __dirname + '/public/dist/public' ));
