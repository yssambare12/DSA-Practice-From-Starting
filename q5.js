// Description

// Given a stringSof all lowercase letters and each letter has a value of its own.

// The value of the alphabetais1,b is 2,c is 3..... tillz is 26.

// Now you have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string.


function stringValue(S) {
    //write code here
   var string = "abcdefghijklmnopqrstuvwxyz";
   var count = 0;
      for (var i = 0; i < S.length; i++){
          for (var j = 1; j < S.length; j++){
              if(S[i] == string[j]){
                  count = count + j;
              }
          }
      }
      console.log(count)
  }