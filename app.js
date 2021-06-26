const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import routes

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req, res) => {

    res.send("We are on home!");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => {

    console.log("conected to DB");
});

app.listen(3000);