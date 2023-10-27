let currentInput = '';
let currentOperator = '';
let firstOperand = null;

// Function to update the display
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput === '' ? '0' : currentInput;
}

// Function to append digits to the current input
function appendToDisplay(digit) {
    if (currentInput === '0' || currentInput === '') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

// Function to perform operations
function performOperation(operator) {
    if (currentInput === '') {
        return;
    }

    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        currentInput = '';
        currentOperator = operator;
    } else {
        const secondOperand = parseFloat(currentInput);
        if (currentOperator === '+') {
            firstOperand += secondOperand;
        } else if (currentOperator === '-') {
            firstOperand -= secondOperand;
        }
        else if (currentOperator === '÷') {
        	firstOperand /= secondOperand;
        }
         else if (currentOperator === '*') {
        	firstOperand *= secondOperand;
        }

        currentInput = '';
        currentOperator = operator;
    }

    updateDisplay();
}


// Function to calculate and display the result
function calculateResult() {
    if (currentInput === '' || firstOperand === null) {
        return;
    }

    const secondOperand = parseFloat(currentInput);

    if (currentOperator === '+') {
        firstOperand += secondOperand;
    } else if (currentOperator === '-') {
        firstOperand -= secondOperand;
    } else if (currentOperator === '*') {
        firstOperand *= secondOperand;
    } else if (currentOperator === '÷') {
        if (secondOperand !== 0) {
            firstOperand /= secondOperand;
        } else {
            clearDisplay();
            updateDisplay("Error");
            return;
        }
    }

    currentInput = firstOperand.toString();
    currentOperator = '';
    firstOperand = null;
    updateDisplay();
}


// Initialize the calculator
updateDisplay();

// Add event listeners to buttons
document.querySelectorAll('.grid-item button').forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;

        if (!isNaN(parseFloat(buttonText))) {
            appendToDisplay(buttonText);
        } else if (buttonText === '+' || buttonText === '-') {
            performOperation(buttonText);
        } else if (buttonText === '=') {
            calculateResult();
        }
    });
});
// Function to clear the input and reset the calculator
function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstOperand = null;
    updateDisplay();
}

// Initialize the calculator
updateDisplay();

// Add event listeners to buttons
document.querySelectorAll('.grid-item button').forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;

        if (!isNaN(parseFloat(buttonText))) {
            appendToDisplay(buttonText);
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*'|| buttonText === '÷') {
            performOperation(buttonText);
        } else if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === 'C') {
            clearDisplay();
        }
    });
});
