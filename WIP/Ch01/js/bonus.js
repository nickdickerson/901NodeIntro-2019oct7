function first(array, count){
    if(typeof count == "number"){
        return array.slice(0, count<0?0:count);
    } else {
        return array[0];
    }
}


console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//--------------------
// Expected output
//--------------------
/*


7
[]
[ 7, 9, 0 ]
[ 7, 9, 0, -2 ]
[]


*/