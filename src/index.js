module.exports = function reverse (n) {
	if(n < 0) n *= -1;
    var Number = n + '';
	return +Number.split('').reverse().join('');
}
