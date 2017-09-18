/*
  Return the number of total permutations of the provided string that don't have
  repeated consecutive letters. Assume that all characters in the provided string are each unique.

  For example, aab should return 2 because it has 6 total permutations
  (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have
  the same letter (in this case a) repeating.
*/

function permAlone(str) {
  var strArr = str.split('');
  var cnt = 0;

  function permute(arr, memo) {
    var cur = null;
    memo = memo !== undefined ? memo : [];

    for (var a=0; a<arr.length; a++) {
      cur = arr.splice(a, 1);

      if (arr.length === 0) {
        var perm = memo.concat(cur).join('');
        if (perm.match(/(.)\1{1,}/) === null) {
        	cnt ++;
        }
      }
      permute(arr, memo.concat(cur));
      arr.splice(a, 0, cur[0]);
    }

    return cnt;
  }

  return permute(strArr);
}

permAlone('aab');

/*
  permAlone("aab") should return a number.
  permAlone("aab") should return 2.
  permAlone("aaa") should return 0.
  permAlone("aabb") should return 8.
  permAlone("abcdefa") should return 3600.
  permAlone("abfdefa") should return 2640.
  permAlone("zzzzzzzz") should return 0.
  permAlone("a") should return 1.
  permAlone("aaab") should return 0.
  permAlone("aaabb") should return 12.
*/
