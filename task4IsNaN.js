
function isnancheeck(x){
if(isNaN(x)){
    return "Not a number!"
}
return x*100;
}
console.log("Your output is :",isnancheeck(255))
console.log("Your 2nd output is :",isnancheeck("244F"))
