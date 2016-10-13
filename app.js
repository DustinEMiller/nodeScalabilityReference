let theApp = (function() {
    'use strict'

    let express = require('express');
    let app = express();
    let port = process.env.PORT || 3000;
    let mongoose = require('mongoose');
    let bodyParser = require('body-parser');
    
    let Book = require('./model/bookModel')();
    
    let db; 
    
    if(process.env.ENV == 'Test') {
        db = mongoose.connect('mongodb://localhost/booksAPI_test');
    } else {
        db = mongoose.connect('mongodb://localhost/booksAPI');    
    }
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    let bookRouter = require('./routes/bookRoutes')(Book);
    
    app.use('/api/Books', bookRouter);
    //app.use('/api/Authors', authorRouter);

    app.get('/', function(req, res) {
        res.send('welcome to my API');
    });
    
    app.listen(port, function() {
       console.log('Running on PORT: '+ port); 
    });
    
    return app;
});

module.exports = theApp();