module.exports = function(orig){
    let ret = "";
    for(let i=orig.length-1; i>=0; i--){
        ret += orig[i];
    }
    return ret;
}