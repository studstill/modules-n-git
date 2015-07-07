exports.addition = function(x, y) {
  return x + y;
};

exports.multiplication = function(x, y) {
  var argArray = [];
  for (var key in arguments)
    argArray.push(arguments[key]);
  return argArray.reduce(function(total, current) {
    return total * current;
  });
};

console.log(exports.multiplication(2, 2, 5));

exports.division = function(x, y) {
  if (process.argv[2] === 'man' || process.argv[2] === 'help' || arguments.length > 4) {
    console.log('Usage: node calculator.js num1 num2 --> prints num1 / num2');
    return;
  }
  return x / y;
};

console.log(exports.division(process.argv[2], process.argv[3]));
