const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    const enteredValue = parseInt(userInput.value);
    if (isNaN(enteredValue)) {
        alert("Please enter a valid number, babe!");
        return 0; // Or handle this better
    }
    return enteredValue;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
     outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult
){const logEntry = {
        operation: operationIdentifier, 
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    //console.log(logEntry.operation) instead of 'operation: 'ADD', '
    console.log(logEntries);

}

function add() {
      console.log("Add button clicked!");
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
    userInput.value = '';
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
    userInput.value = '';
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
     writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
    userInput.value = '';
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
     writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
    userInput.value = '';
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);