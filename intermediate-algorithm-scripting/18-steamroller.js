// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattened = [];

  function flatten(thisArr) {
    for (var a=0;a<thisArr.length; a++) {
      if (Array.isArray(thisArr[a])) {
        flatten(thisArr[a]);
      } else {
        flattened.push(thisArr[a]);
      }
    }
  }

  flatten(arr);
  return flattened;
}


/*
  steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
  steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
  steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
  steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/
