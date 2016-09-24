const expect = require('chai').expect;
const first   = require('../index');

describe('#lastOfArray', function() {
	it('should return a number', function() {
		const arr = [1,2,3,4,5];
		const result = first(arr);
		expect(result).to.be.a('number');
		expect(result).to.equal(5);
	});

	it('should return a string', function() {
		const arr = [1,2,3,4,5,'Ahad'];
		const result = first(arr);
		expect(result).to.be.a('string');
	});

	it('should return an array as the last element', function() {
		const result = first([13,2234,32,43,5.2223,1,[2e10]]);
		expect(result).to.not.equal(2);
	});
});