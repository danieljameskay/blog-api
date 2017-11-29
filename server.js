require('dotenv').config();

const express = require("express"),
    app = express(),
    expressLayouts = require('express-ejs-layouts'),
    bodyParser = require('body-parser');
    moongoose = require('mongoose');

moongoose.connect(process.env.DB_URI);
bodyParser.json();

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);
app.use(require('./app/routes'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.SITE_URI);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
});

app.listen(app.get('port'), () => {console.log(`Listening on port: ${port}`})})

