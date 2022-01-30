// Description

// Given an array of integers and a number k, find the maximum sum of a subarray of size k.
// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1

// 21



function Maxarray(arr,k){
    var N = arr.length;
    var out = 0;
     for (var i = 0; i < k; i++) {
        out = out + arr[i];
        // total out is -4 here 
    }

    var sum = out;
    // -4
    for (var i = k; i < N; i++) {
        sum = sum + arr[i] - arr[i - k];
        console.log(arr[i])
        out = Math.max(out, sum);
    }
    return out;
}

function runProgram(input){
    var input = input.trim().split("\n");
    var [size, k] = input[0].split(" ").map(Number)
    var line = 1
    var arr = input[line++].split(" ").map(Number)
    console.log(Maxarray(arr,k))
}

if (process.env.USERNAME === "Admin") {
    runProgram('10 3\n-1 -1 -2 1 2 4 1 9 3 9');
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}//Enter code here
