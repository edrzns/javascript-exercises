const add = function(x, y) {
	return result = x + y;
};

const subtract = function(x, y) {
	return result = x - y;
};

const sum = function(n) {
	let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += n[i];
  }
  return total;
};

const multiply = function(num) {
  return num.reduce((product, num) => product * num, 1);
};

const power = function(x, y) {
	return result = x ** y;
};

const factorial = function(n) {
	if (n < 0) return undefined; // no factorial for negative numbers
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
