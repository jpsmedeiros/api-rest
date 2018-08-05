var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValitador = require('express-validator');

module.exports = function(){
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(expressValitador());

    consign()
        .include('routes')
        .then('persistence')
        .into(app);

    return app;
}