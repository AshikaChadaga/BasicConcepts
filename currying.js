function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function curriedFunction(a) {
  return function (b) {
    let sumResult = add(a, b);
    console.log("Sum : " + sumResult);
    return function (c) {
      let differenceResult = subtract(sumResult, c);
      console.log("Difference : " + differenceResult);
      return function (d) {
        let multiplyResult = multiply(differenceResult, d);
        console.log("Mulitply : " + multiplyResult);
        return function (e) {
          let divideResult = divide(multiplyResult, e)
          console.log("Divide : " + divideResult);
        }
      }
    }
  }
}

let curriedResult1 = curriedFunction(1)(2);
let curriedResult2 = curriedResult1(2);
let curriedResult3 = curriedResult2(4);
let curriedResult4 = curriedResult3(2);

// let average = function(...n){
//   let total = 0;
//   for(let i=0 ; i<n.length ; i++)
//     total += n[i];

//     return total/n.length;
// };

// let curriedResult = function(fn, ...n){
//   return function(...m){
//     return fn.apply(this,n.concat(m));
//   }
// };

// let calculateAverage = curriedResult(average, 1,2,3);
// console.log(calculateAverage(4,5,6));

// let sayWhat = function(a){
//   return function(b){
//     return function(c){
//       console.log("Saying " + a + " to " + b + " Using " + c)
//     }
//   }
// };

// sayWhat("Hello")("Friends")("JavaScript");