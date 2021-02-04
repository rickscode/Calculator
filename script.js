
const add = (a, b) => {return a + b};

// Function for subtracting

const subtract = (a, b) => {return a - b};

// Function for multiplying 

const multiply = (a, b) => {return a * b};

// Function for dividing 

const divide = (a, b) => {return a / b};

// Binding for display value

let displayValue = "";

// Binding for operator value 

let operatorValue = null;


let numInput = "";

// Binding for firstNum

let firstNum = "";

// Binding for secondNum

let secondNum = "";

// Binding for DOM selection .number
let buttons = document.querySelectorAll(".number");

// Create a node list 
buttons.forEach((button) => {

// Click event listener wich calls screen function 
button.addEventListener('click', screen);       
});

// Function to display numbers pressed on display 

function screen(e) {
    displayValue += e.target.textContent;
    document.getElementById("display").textContent = displayValue;
}


// Binding for DOM selection .operator

let pressOperator = document.querySelectorAll(".operator")

// Create a node list 

pressOperator.forEach((button) => {

// Click event listener wich calls storeInput function 
button.addEventListener('click', storeInput);       
});

// Funtion for storing first number value

function storeInput(e) {
    
    if(operatorValue !== null) check();
    firstNum = parseInt(displayValue);
    
    
    operatorValue = e.target.textContent;
   
    
    // Clear display
    displayValue = "";
    // Display firstNum and operatorValue
    document.getElementById("display").textContent = `${firstNum} ${operatorValue}`;
}
 

function check() {
    secondNum = parseInt(displayValue);
    document.getElementById("display").textContent = operate(operatorValue, firstNum,secondNum);
    
    displayValue = document.getElementById("display").textContent;
}


// Execution for equating expression

let equate = document.querySelector(".equals");

equate.addEventListener('click', answer);

function answer(e) {
    check();
    }
 

    const operate = function (operator, a, b) {
    switch(operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "x":
            return multiply(a, b);
            break;
        case "/":
            return divide(a,b);
    }
}

// Clear display & input bindings

let clear = document.getElementById("clear");
 
clear.addEventListener('click', clearScreen); 

function clearScreen(e) {
    displayValue = "";
    operatorValue= "";
    firstNum = "";
    secondNum = "";
    document.getElementById("display").textContent = displayValue;
} 

