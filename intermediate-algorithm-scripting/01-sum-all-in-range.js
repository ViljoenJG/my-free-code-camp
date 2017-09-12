/*
  We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
  The lowest number will not always come first.
*/

function sumAll(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var total = 0;

  for (var a=min;a<=max;a++) {
    total += a;
  }

  return total;
}

//tests

sumAll([1, 4]) // should return a number.
sumAll([1, 4]) // should return 10.
sumAll([4, 1]) // should return 10.
sumAll([5, 10]) // should return 45.
sumAll([10, 5]) // should return 45.
