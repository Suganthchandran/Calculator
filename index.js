let answer = document.getElementById("answer");

function disp(input)
{
    answer.value +=  input;
}

function displayClear()
{
    answer.value = "";
}

function singleClear() {
    answer.value = answer.value.slice(0, -1);
}

function calculate()
{
    try
    {
        let expression = answer.value.replace(/(^|[^0-9])0+(?=[0-9])/g, '$1');
        answer.value = eval(expression);
    }
    catch(error)
    {
        answer.value = "Error";
    }
}