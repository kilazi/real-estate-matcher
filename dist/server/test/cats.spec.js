"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chaiHttp = require("chai-http");
process.env.NODE_ENV = 'test';
var app_1 = require("../app");
var cat_1 = require("../models/cat");
var should = chai.use(chaiHttp).should();
describe('Cats', function () {
    beforeEach(function (done) {
        cat_1.default.remove({}, function (err) {
            done();
        });
    });
    describe('Backend tests for cats', function () {
        it('should get all the cats', function (done) {
            chai.request(app_1.app)
                .get('/api/cats')
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
        it('should get cats count', function (done) {
            chai.request(app_1.app)
                .get('/api/cats/count')
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('number');
                res.body.should.be.eql(0);
                done();
            });
        });
        it('should create new cat', function (done) {
            var cat = { name: 'Fluffy', weight: 4, age: 2 };
            chai.request(app_1.app)
                .post('/api/cat')
                .send(cat)
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.a.property('name');
                res.body.should.have.a.property('weight');
                res.body.should.have.a.property('age');
                done();
            });
        });
        it('should get a cat by its id', function (done) {
            var cat = new cat_1.default({ name: 'Cat', weight: 2, age: 4 });
            cat.save(function (error, newCat) {
                chai.request(app_1.app)
                    .get("/api/cat/" + newCat.id)
                    .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('weight');
                    res.body.should.have.property('age');
                    res.body.should.have.property('_id').eql(newCat.id);
                    done();
                });
            });
        });
        it('should update a cat by its id', function (done) {
            var cat = new cat_1.default({ name: 'Cat', weight: 2, age: 4 });
            cat.save(function (error, newCat) {
                chai.request(app_1.app)
                    .put("/api/cat/" + newCat.id)
                    .send({ weight: 5 })
                    .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
            });
        });
        it('should delete a cat by its id', function (done) {
            var cat = new cat_1.default({ name: 'Cat', weight: 2, age: 4 });
            cat.save(function (error, newCat) {
                chai.request(app_1.app)
                    .delete("/api/cat/" + newCat.id)
                    .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=cats.spec.js.map