module.exports = (function() {
    'use strict'
    
    let mongoose = require('mongoose');
    let Schema = mongoose.Schema;
    
    let bookModel = new Schema({
        title: {
            type: String
        },
        genre: {
            type: String
        },
        author: {
            type: String
        },
        read: {
            type: Boolean, 
            default: false
        }
    });
    
    return mongoose.model('Book', bookModel);
});