// Function for adding

const add = (a, b) => {return a + b};

// Function for subtracting

const subtract = (a, b) => {return a - b};

// Function for multiplying 

const multiply = (a, b) => {return a * b};

// Function for dividing 

const divide = (a, b) => {return a / b};

// Variable for number input

let displayValue = "";

// Function for sum array

// const sum = function (array) {
//   return array.reduce((sum, current) => sum + current, 0);
// };

let buttons = document.querySelectorAll(".number");

buttons.forEach((button) => {

// Click event listener wich calls gameRound function 
button.addEventListener('click', screen);       
});

// Function to display numbers pressed on display 
function screen(e) {
    displayValue += e.target.textContent;
    console.log(displayValue);
    document.getElementById("display").textContent = displayValue;
}


// Create a new function operate that 
// takes an operator and 2 numbers and then calls 
// one of the above functions on the numbers.


const operate = function (operator, a, b) {
    switch(operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a,b);
    }

}


