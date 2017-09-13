/*
  Convert the characters &, <, >, " (double quote), and ' (apostrophe),
  in a string to their corresponding HTML entities.

  Remember to use Read-Search-Ask if you get stuck. Try to pair program.
  Write your own code.
*/


function convertHTML(str) {
  // &colon;&rpar;
  var charLookup = {'<' : '&lt;', '>': '&gt;', '\'': '&apos;', '\"': '&quot;' ,'&': '&amp;'};
  var mappedStrArr = str.split('').map(function(char) {
    if (charLookup[char] !== undefined) {
      return charLookup[char];
    } else {
      return char;
    }
  });


  return mappedStrArr.join('');
}

/*
  convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
  convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
  convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
  convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
  convertHTML("Shindler's List") should return Shindler&​apos;s List.
  convertHTML("<>") should return &​lt;&​gt;.
  convertHTML("abc") should return abc.
*/
