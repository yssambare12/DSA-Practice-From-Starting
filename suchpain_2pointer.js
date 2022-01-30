// // Description

// // For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).

// Sample Input 1 

// 1
// 5 2
// 3 4 0 2 7
// Sample Output 1

// 1

function pairfind(arr,k){
    arr = arr.sort((a,b)=>a-b)
    var left = 0;
    var right = arr.length - 1;
    while (arr[left] < arr[right]){
        var sum = arr[left] + arr[right];
        if (sum === k){
            return "1"
        } else if (sum > k){
            right--;
        }else {
            left++;
        }
    }
 return "-1"
}


function runProgram(input) {
    var input = input.split("\n");
    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
        var [size, k] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(pairfind(arr, k));
    }
}

if (process.env.USERNAME === "Admin") {
    runProgram('1\n5 2\n3 4 0 2 7');
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
}
