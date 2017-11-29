require('dotenv').config();

const express = require("express"),
    app = express(),
    expressLayouts = require('express-ejs-layouts'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    moongoose = require('mongoose');

moongoose.connect(process.env.DB_URI);
bodyParser.json();

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);
app.use(require('./app/routes'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.listen(app.get('port'), () => {console.log(`Listening on port: ${app.get('port')}`)});
