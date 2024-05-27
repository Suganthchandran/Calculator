let answer = document.getElementById("answer");

function disp(input) {
    answer.value += input;
}

function displayClear() {
    answer.value = "";
}

function singleClear() {
    answer.value = answer.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = answer.value;
        
        if (/[\+\-\*\/]{2,}/.test(expression)) {
            answer.value = "Error";
            return;
        }

        if (/[\+\-\*\/]$/.test(expression)) {
            expression = expression.slice(0, -1);
        }

        expression = expression.replace(/(^|[^0-9])0+(?=[0-9])/g, '$1'); // Removing leading zeros
        answer.value = eval(expression);
    } catch (error) {
        answer.value = "Error";
    }
}
