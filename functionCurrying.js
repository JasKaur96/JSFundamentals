var add = function(a){   //currying transfromation
    return function(b){
        return a + b;
    }
}
var addfive = add(5);   //passes 5 to add() and returns the function.
console.log(addfive(1)); // passes 1 to add()

console.log(add(1)(2));  //passes 1 and returns add() then passes 2 to it.