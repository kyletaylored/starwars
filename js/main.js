
var add = function (a, b) {
  return a + b;
};

// Grab numbers from users.
var number1 = prompt("Enter first number.");
var number2 = prompt("Enter second number.");

// Parse numbers for numbers.
number1 = parseInt(number1);
number2 = parseInt(number2);

var sum = add(number1, number2);
var believer = confirm("Do you believe that sum is " + sum + "?");

// Add conditional for beliebers.
if (believer === true) {
  alert("Euler would be proud.");
} else {
  alert("DENIER OF SCIENCE!");
}

console.log(sum);
