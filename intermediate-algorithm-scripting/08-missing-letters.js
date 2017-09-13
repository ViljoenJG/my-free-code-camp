/*
  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvxyz';
  if (alphabet.indexOf(str) != -1) {
    return undefined;
  }

  var alphabetSnippet = alphabet.slice(str[0]);

  for (var a=0; a<alphabetSnippet.length; a++) {

    if (alphabetSnippet[a] != str[a]) {
      return alphabetSnippet[a];
    }
  }
}

/*
  fearNotLetter("abce") should return "d".
  fearNotLetter("abcdefghjklmno") should return "i".
  fearNotLetter("bcd") should return undefined.
  fearNotLetter("yz") should return undefined.
*/
