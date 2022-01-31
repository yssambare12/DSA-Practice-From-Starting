// You are given an array of  of N integers. You need to printYesif 42 is present in array, else printNo.


function equalTo42(size,arr) {
    //write code here
    var size = 5;
    var arr = [3, 7, 0, 9, 8,];
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 42){
            count++;
        } 
    }
    
    if (count == 1){
        console.log("Yes");
    } else{
        console.log("No");
    }

}
