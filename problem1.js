// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

// test.png

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// You are given total amount of bill, N , you need to find total unit consumed.


// Input
// Input Format:

// First and the only line of input contains the bill amount

// Constraints:

// 0 <= N <= 1000


// Output
// Print number of units consumed.


// Sample Input 1 

// 930
// Sample Output 1

// 170
// Hint

// Total 930 rupees is the bill amount.

// So total unit consumed would be 170. See calculation below.

// Charges for 170 units :-

// Fixed Charge :- 80
// Charges for first 50 units :- 50 * 3 = 150
// Charges of next 100 units :- 100 * 5 = 500
// Charges of next 20 units :- 20 * 10 = 200
// Total Charges => 80 + 150 + 500 + 200 = 930.

// first wrong Approch

// function unitsConsumed(n) {
//     //write code here
//     var n = n - 80;
//     var fixed = 80;
//     var first = 0;
//     var second = 0;
//     var third = 0;
//     var breakpoint1 = 50;
//     var breakpoint2 = 100;
//     var breakpoint3 = 20;
    
//     for (var i = 0; i <= breakpoint1; i++){
//         if (i < breakpoint1 ){
//             first = first + 3;
//         }
//     }

//     for (var i = 0; i < breakpoint2; i++){
//         if (i < breakpoint2){
//             second = second + 5;
//         }
//     }

//      for (var i = 0; i < breakpoint3; i++){
//         if (i < breakpoint3){
//             third = third + 10;
//         }
//     }
//     console.log(first + second + third + fixed)
// }


// write approch

function unitsConsumed(n) {
    //write code here
    var n = 970;
var a = n - 80;

if (a > 650) {
    console.log((a - 650) / 10 + 150);
} else if (a > 150) {
    console.log((a - 150) / 5 + 50);
} else if (a > 0) {
    console.log(a / 3);
}

}

