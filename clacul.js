function add() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    var result = firstNumber + secondNumber;
    document.getElementById("resultBox").value = result;
}

function sub() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    var result = firstNumber - secondNumber;
    document.getElementById("resultBox").value = result;
}

function mul() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    var result = firstNumber * secondNumber;
    document.getElementById("resultBox").value = result;
}

function div() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    if (secondNumber === 0) {
        alert("Cannot divide by zero");
        return;
    }
    var result = firstNumber / secondNumber;
    document.getElementById("resultBox").value = result;
}

function mod() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    if (secondNumber === 0) {
        alert("Cannot mod by zero");
        return;
    }
    var result = firstNumber % secondNumber;
    document.getElementById("resultBox").value = result;
}
