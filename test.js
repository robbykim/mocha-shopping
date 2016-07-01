var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./server.js');

// chai.should is a CHAI METHOD
var should = chai.should();

// grabbing objects from server.js
// via exports.app and etc.
var app = server.app;
var storage = server.storage;

// chai is prompted to use http extension
chai.use(chaiHttp);

// test description
describe('Shopping List', function () {
  it('should list items on GET', function (done) {
    chai.request(app)
      .get('/items')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it('should add an item on post');
  it('should edit an item on put');
  it('should delete an item on delete');
});
