// Description

// Given a string of lowercase characters and integers, decompress the string under the following rules:

// If an integer is encountered, the character just before it gets added to a final string as many times as the number
// For instance, if the string isa3b2=> the output should beaaabbbecauseais followed by 3, andbis followed by 2

// Complete the function to decompresses the string and print it.

function decompressString(string) {
    //write code here
    out = "";
    for(var i = 0; i < string.length; i = i + 1) {
    if (string[i] > '0' && string[i] <= '9') {
    var x = string[i - 1];
      for (var j = 0; j < string[i]; j = j + 1) {
      out = out + string[i - 1];
      }
    }
    }
    console.log(out);
  }