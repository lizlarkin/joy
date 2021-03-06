const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path")

require("./models/connection")

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Heroku deployment
if(process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"))
}

// custom routes go here
app.use("/blog", require("./routes/routes"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
});


