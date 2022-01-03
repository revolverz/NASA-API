const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const db = require("./app/models");
//db.sequelize.sync();

const Role = db.role;

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to nasa application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// dev only
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "admin"
  });
}

db.sequelize.sync().then(() => {
  initial();
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// dev.only
//db.sequelize.sync({ force: true }).then(() => {
//    console.log("Drop and re-sync db.");
//});

// prod
//db.sequelize.sync();
