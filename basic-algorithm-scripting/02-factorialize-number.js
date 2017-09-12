function factorialize(num) {
  var factor = 1;
  for (var a=1; a<=num;a++) {
      factor *= a;
  }

  return factor;
}

// tests

factorialize(5) // should return a number.
factorialize(5) // should return 120.
factorialize(10) // should return 3628800.
factorialize(20) // should return 2432902008176640000.
factorialize(0) // should return 1.
