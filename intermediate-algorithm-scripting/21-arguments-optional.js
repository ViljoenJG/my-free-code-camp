/*
  Create a function that sums two arguments together. If only one argument is provided,
  then return a function that expects one argument and returns the sum.

  For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
  Calling this returned function with a single argument will then return the sum:

  var sumTwoAnd = addTogether(2);

  sumTwoAnd(3) returns 5.

  If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  var args = Array.prototype.slice.call(arguments);

  if (args.length === 0) {
    return undefined;
  }

  for (var a=0; a<args.length; a++) {
    if (typeof args[a] != 'number') {
      return undefined;
    }
  }

  var firstArg = args[0];
  var secondArg = args[1];

  if (secondArg === undefined) {
    return function(arg) {
      if (typeof arg != 'number') {
        return undefined;
      } else {
        return firstArg + arg;
      }
    };
  } else {
    return firstArg + secondArg;
  }
}

/*
  addTogether(2, 3) should return 5.
  addTogether(2)(3) should return 5.
  addTogether("http://bit.ly/IqT6zt") should return undefined.
  addTogether(2, "3") should return undefined.
  addTogether(2)([3]) should return undefined.
*/
