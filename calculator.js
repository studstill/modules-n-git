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
