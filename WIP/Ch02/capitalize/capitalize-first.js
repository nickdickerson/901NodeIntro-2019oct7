
console.log(`ORIGINAL:  ${process.argv.filter((x, i, arr)=>{return i>1;}).join(" ")}`);

let res = "";
// process.argv.forEach((word, i) => {
//     if(i>1){
//         res+=word[0].toUpperCase() + word.substr(1) +" ";
//     }
// });
process.argv.filter((x, i, arr)=>{return i>1;}).forEach((word, i, arr) => {
    //res+=word[0].toUpperCase() + word.substr(1) +" ";
    res+=word[0].toUpperCase() + word.substr(1) + (i<arr.length-2?" ":"");
});
//res.trim();

console.log(`PROCESSED: ${res}`);