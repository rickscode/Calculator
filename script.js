// Function for adding

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
    console.log("display", displayValue);
    document.getElementById("display").textContent = displayValue;
}

// Step 5

// Binding for DOM selection .operator

let pressOperator = document.querySelectorAll(".operator")

// Create a node list 

pressOperator.forEach((button) => {

// Click event listener wich calls storeInput function 
button.addEventListener('click', storeInput);       
});

// git push to here

function storeInput(e) {
    
    if(operatorValue !== null) check();
    firstNum = parseInt(displayValue);
    console.log("first", firstNum);
    
    operatorValue = e.target.textContent;
    console.log("operator", operatorValue);
    
    // clear display
    displayValue = "";
    // document.getElementById("display").textContent = operatorValue;
    // console.log("display", displayValue);
}

// git push to here 

function check() {
    secondNum = parseInt(displayValue);
    console.log("second", secondNum);
    document.getElementById("display").textContent = operate(operatorValue, firstNum,secondNum);
    
    displayValue = document.getElementById("display").textContent;
    console.log("display", displayValue);
}



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



