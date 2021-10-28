// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
//JavaScript hoists declarations not initializations
console.log("Value of x : " + x);
var x = 10;
console.log("Value of x : " + x);
// console.log("Value of y : " + y);

// helloWorld();
function helloWorld(){
  console.log("Hello World!!");
}
helloWorld();

a = 90;
console.log("Value of a : " + a);
var a;