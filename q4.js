// You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.

// hint
// Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.

// So total count is 7. Hence we print 7.

function subStrUnderCond(s){
    //write code here
    // converting single string to arr index
    Array.from(s);
    // 
    var count = 0;
    for (var i = 0; i < s.length; i++){
        for (var j = i; j <= s.length; j++){
            if (s[j] == s[i])
            count++;
        }
    }
    console.log(count);
    }
    