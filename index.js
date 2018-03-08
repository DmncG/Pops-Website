let express = require("express");
let path = require("path");
let PORT = process.env.PORT || 8081

let app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, function() {
  console.log(`~~~~ Server listening on ${PORT} ~~~~`);
});