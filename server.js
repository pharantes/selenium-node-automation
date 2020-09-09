const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

// the routes go here:
app.get("/", function(req, res) {
    res.send("")
});


app.listen(5000, () => console.log("My project is running on port 5000"));