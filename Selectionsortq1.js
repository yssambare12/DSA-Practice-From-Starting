// Description

// You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


// Input
// Input Format:

// First line of input contains N

// Second line of input contains N numbers

// Constraints:

// N < 500


// Output
// Output the numbers given after sorting it in increasing order




function selectionsort(arr){

    // 3 5 0 9 8
    
    for (var i = 0; i < arr.length; i++){
        var min = i
        for(var j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        if (min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }

    arr = arr.join(" ");
    return arr;
}
function runProgram(input){
    input = input.split("\n")
    var arr = input[1].split(" ").map(Number);
    selectionsort(arr);
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
