require("dotenv").config();

const express = require("express");
const authRouter = require('./routes/authRoutes');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.use('/auth',authRouter);

app.listen(port);
