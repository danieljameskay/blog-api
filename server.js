require('dotenv').config();

const express = require("express"),
    app = express(),
    port = process.env.PORT || 8080,
    expressLayouts = require('express-ejs-layouts'),
    moongoose = require('mongoose');

moongoose.connect(process.env.DB_URI);

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);
app.use(require('./app/routes'));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})
