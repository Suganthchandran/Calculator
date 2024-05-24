const answer = document.getElementById("answer");

function disp(input)
{
    answer.value +=  input;
}

function clear()
{
    answer.value = "";
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