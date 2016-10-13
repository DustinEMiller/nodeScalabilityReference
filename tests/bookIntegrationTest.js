(function() {
    let should = require('should');
    let request = require('supertest');
    let app = ('../app.js');
    let mongoose = require('mongoose');
    let Book = require('../model/bookModel')();
    let agent = request.agent(app);
    
    describe('Book CRUD test', function() {
       it('Should allow a book to be poster and return a read and _id', function(done) {
           let bookPost = {title:'new book', author:'Dustin', genre:'Fiction'};
           
           agent.post('/api/books')
           .send(bookPost)
           .expect(200)
           .end(function(err, results) {
               results.body.read.should.equal(false);
               results.body.should.have.property('_id');
               done();
           });
       });
        
        afterEach(function(done) {
            Book.remove().exec();
            done();
        })
    });
})();