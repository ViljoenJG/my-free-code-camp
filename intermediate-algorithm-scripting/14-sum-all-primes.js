/*
  Sum all the prime numbers up to and including the provided number.

  A prime number is defined as a number greater than one and having only two divisors,
  one and itself. For example, 2 is a prime number because it's only divisible by one and two.

  The provided number may not be a prime.
*/

function isPrime(num) {
  var numStr = '';

  for (var a=0; a<num; a++) {
    numStr += '1';
  }

  // Regular Expression to check for prime http://montreal.pm.org/tech/neil_kandalgaonkar.shtml
  var matches = numStr.match(/^1?$|^(11+?)\1+$/);
  return (matches === null);
}

function sumPrimes(num) {
  var sum = 0;

  for (var a=0; a<=num; a++) {
    if (isPrime(a)) {
      sum += a;
    }
  }

  return sum;
}

/*
  sumPrimes(10) should return a number.
  sumPrimes(10) should return 17.
  sumPrimes(977) should return 73156.
*/
