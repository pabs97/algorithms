//Defaults
let cachedValue = 0, currentValue = 0, prevOperation = '+';
let inputString = '';

const numbers = document.querySelector('.cal-number-buttons');
const operations = document.querySelector('.cal-operations-buttons');
const clear = document.querySelector('.clear');

clear.addEventListener('click', function (e) {
    cachedValue = 0;
    prevOperation = '+';
    currentValue = 0;
});

numbers.addEventListener('click', function(e) {
    inputString += e.target.innerText;
    let val = Number(e.target.innerText) || 0;
    currentValue = currentValue * 10 + val;
    updateInputDisplay();
    logAll();
});

operations.addEventListener('click', function(e){
    inputString += e.target.innerText;
    let operation = e.target.innerText;
    switch(prevOperation){
        case '+': 
            cachedValue = cachedValue + currentValue;
            updateDisplay(cachedValue);
            break;
        case '-':
            cachedValue = cachedValue - currentValue;
            updateDisplay(cachedValue);
            break;
        case'/': 
            cachedValue = cachedValue / currentValue;
            updateDisplay(cachedValue);
            break;
        case '*':
            cachedValue = cachedValue * currentValue;
            updateDisplay(cachedValue);
            break;
        case '=':
            inputString += cachedValue + ';';
            updateDisplay(cachedValue);
            // display value
            // default opertaion to +;
            break;
        default:
            break;
    }
    prevOperation = operation;
    currentValue = 0;
    updateInputDisplay();
    logAll();
    
});

function updateDisplay(num) {
    document.querySelector('.display-bar').innerHTML = num;
}

function updateInputDisplay() {
    document.querySelector('.input-display').innerHTML = inputString;
}

function logAll() {
    console.table({cachedValue, currentValue, prevOperation});
}