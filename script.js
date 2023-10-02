let a, b, operator;
let previousvalue = "";
let cuurentValue=""
function add()
{
    
    return a+b;
}

function subtract()
{
    
    return a-b;
}

function multiply()
{
    return a*b;
}

function divide()
{
    return a/b;
}
let previous = document.querySelector(".prev-text")
let displaytext = document.querySelector(".display-text")
let number = document.querySelectorAll(".number");
number.forEach((item) =>
{
    item.addEventListener("click", function(e)
    {
        handlenumbers(item.innerHTML)
        displaytext.textContent= cuurentValue;

    })
})

let operators = document.querySelectorAll(".operators")
operators.forEach((otheritem) =>
{
otheritem.addEventListener("click",function(e)
    {
        handlenumbers(otheritem.innerHTML)
        displaytext.textContent= cuurentValue;
    })
})

function handlenumbers(sum)
{
    cuurentValue +=sum;
}

let brackets=document.querySelectorAll(".brackets")
brackets.forEach((bracketitems) =>
{
    bracketitems.addEventListener("click", function(e)
    {
        handlenumbers(bracketitems.innerHTML)
        displaytext.textContent= cuurentValue; 
    })
})

let clear = document.getElementById("clear")
clear.addEventListener("click", function(e)
{
    displaytext.textContent= previous;
})

let equals = document.querySelector(".equals")
equals.addEventListener("click", function(e)
{
    operate();
})

