let answer = document.getElementById("answer");

function disp(input)
{
    answer.value +=  input;
}

function clear()
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
        answer.value = eval(answer.value);
    }
    catch(error)
    {
        answer.value = "Error";
    }
}