// Description

// You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION

// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9



function bubblesort(arr){
    for (var i = 1; i <arr.length; i++){
        for (var j = 0; j <arr.length - i; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    console.log(arr.join(" "))
}

function runProgram(input){
    input = input.split("\n")
    var arr = input[1].split(" ").map(Number);
    bubblesort(arr);
}

if (process.env.USERNAME === "Admin") {
    runProgram(input);
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
