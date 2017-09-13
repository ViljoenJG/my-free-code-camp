/*
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

// solution 1
function spinalCase(str) {
  str = str.replace(/[\s]|[^a-zA-Z]/g, '-');

  return str.split('').reduce(function(acc, curr, i, arr) {
    if (curr === '-') { return acc + curr; }

    if (curr.toUpperCase() === curr) {
      return acc + ((i === 0 || arr[i - 1] === '-') ? curr.toLowerCase() : '-' + curr.toLowerCase());
    }

    return acc + curr;
  }, '');
}

// solution 2
function spinalCase(str) {
  str = str.replace(/[^a-z]/gi, ' ');

  str = str.replace(/[A-Z]/g, function (match, offset) {
    if (offset === 0 || str[offset - 1] == ' ') {
      return match.toLowerCase();
    }

    return ' ' + match.toLowerCase();
  });

  str = str.replace(/\s/g, '-');

  return str;
}

/*
  spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
  spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
  spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
  spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
  spinalCase("AllThe-small Things") should return "all-the-small-things".
*/
