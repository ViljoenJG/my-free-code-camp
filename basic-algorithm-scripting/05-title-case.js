/*
  Return the provided string with the first letter of each word capitalized.
  Make sure the rest of the word is in lower case.

  For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var strArr = str.split(" ");

  var tcStrArr = strArr.map(function(val) {
    return val[0].toUpperCase() + val.slice(1).toLowerCase();
  });

  return tcStrArr.join(" ");
}

// tests
titleCase("I'm a little tea pot") // should return a string.
titleCase("I'm a little tea pot") // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return "Here Is My Handle Here Is My Spout".
