var chai = require('chai');
var expect = chai.expect;
var jsdom = require("jsdom");
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };

// library
var VerifierCtor = require('../src/index').Verifier;
var offlineVerifier = new VerifierCtor();

describe('starting', function() {
    it('should start with connection enabled', function() {
        expect(offlineVerifier.status).to.be.true;
        // var word = 'hello world';
        // expect(word).to.equal('hello world');
        // expect(word).to.not.equal('HELLO WORLD');
        // expect(word).to.be.a('string');
        // expect(word).to.not.be.a('number');
        // expect(word).to.contain('hello');
    })
    it('should return current status', function() {
        var currentStatus = offlineVerifier.getStatus();
        expect(currentStatus).to.be.true;
        // var word = 'hello world';
        // expect(word).to.equal('hello world');
        // expect(word).to.not.equal('HELLO WORLD');
        // expect(word).to.be.a('string');
        // expect(word).to.not.be.a('number');
        // expect(word).to.contain('hello');
    })
})