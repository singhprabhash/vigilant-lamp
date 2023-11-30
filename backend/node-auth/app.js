const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require("./routes/auth.routes");


require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

mongoose.connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server running on port:${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err))

app.get("/", (req, res) => {
  res.render("home");
})

app.use(authRoutes);

