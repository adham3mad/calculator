let display = document.getElementById("display");
let operation = document.getElementById("operation");

function clearDisplay() {
    display.textContent = "0";
    operation.textContent = "";
}

function appendNumber(num) {
    if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
}

function appendOperator(op) {
    const lastChar = display.textContent.slice(-1);
    if ("+-*/".includes(lastChar)) {
        display.textContent = display.textContent.slice(0, -1) + op;
    } else {
        display.textContent += op;
    }
}

function appendDot() {
    const parts = display.textContent.split(/[\+\-\*\/]/);
    if (!parts[parts.length - 1].includes(".")) {
        display.textContent += ".";
    }
}

function calculate() {
    try {
        const expression = display.textContent;
        const result = eval(expression);
        operation.textContent = expression.replace(/\*/g, "×").replace(/\//g, "÷");
        display.textContent = result;
    } catch {
        display.textContent = "Error";
    }
}

function toggleSign() {
    try {
        display.textContent = String(eval(display.textContent) * -1);
    } catch {
        display.textContent = "Error";
    }
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = "0";
    }
}
