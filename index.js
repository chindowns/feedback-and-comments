require('dotenv').config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Require Route.  If more routes are needed, move to Routes and Controllers
require("./routes/api-routes.js")(app);

var db = require("./models");

// Syncing Sequelize Models
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});
