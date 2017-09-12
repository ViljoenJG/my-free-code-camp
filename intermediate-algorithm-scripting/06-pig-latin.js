/*
  Translate the provided string to pig latin.

  Pig Latin takes the first consonant (or consonant cluster) of an English word,
  moves it to the end of the word and suffixes an "ay".

  If a word begins with a vowel you just add "way" to the end.

  Input strings are guaranteed to be English words in all lowercase.
*/

var vowels = ['a', 'e', 'i', 'o', 'u'];
function translatePigLatin(str) {
  var strArr = str.split('');
  var arrLen = strArr.length;

  for (var a=0; a<arrLen; a++) {
    var char = strArr.shift();
    if (vowels.indexOf(char) != -1) {
      if (a === 0) {
        strArr.unshift(char);
        strArr.push('way');
        return strArr.join('');
      } else {
        strArr.unshift(char);
        strArr.push('ay');
        return strArr.join('');
      }
    } else {
      strArr.push(char);
    }
  }
}

/*
  translatePigLatin("california") should return "aliforniacay".
  translatePigLatin("paragraphs") should return "aragraphspay".
  translatePigLatin("glove") should return "oveglay".
  translatePigLatin("algorithm") should return "algorithmway".
  translatePigLatin("eight") should return "eightway".
*/
