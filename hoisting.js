var x = 5; // Initialize x
var y;
console.log(x,y);        // Display x and y

y = 7; // Initialize y

// let x = 20,
//     y = 10;

// let result = add(x,y);
// console.log(result);

// function add(a, b){
// return a + b;
// }

// function add(a, b){
//     return a + b;
// }

// let x = 20,
//     y = 10;

// let result = add(x,y);
// console.log(result);
hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};