// Description

// You are given a integernum.

// You need to printYesif that integer is a palindrome or else printNo.

// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward, such asmadamorracecar.


// Input
// Input Format

// First line containsnum, a integer.

// Constraints

// 1 <= num <= 1000000


// Output
// PrintYesorNodepending upon the integer.


// Sample Input 1 

// 1221
// Sample Output 1

// Yes
// Hint

// Sample 1 Explanation

// We printYesas1221`is a palindrome.



function detectPalindrome(num){
    //write code here
    var out = [];
    for (var i = num.length - 1; i >= 0; i--){
        out = out + num[i];
        
        if (out[i] == num[i]){
            var fout = "Yes"
        } else {
            var fout = "No"
        }
    }
    console.log(fout);
    }
    