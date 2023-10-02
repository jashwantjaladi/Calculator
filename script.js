
let previousvalue = "";
let cuurentValue= ""
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

function handlenumbers(sum)
{
 if(cuurentValue.length<=5)
 {
    cuurentValue+=sum;
 }   
}

let operators = document.querySelectorAll(".operators")
operators.forEach((otheritem) =>
{
otheritem.addEventListener("click",function(e)
    {
        handleoperator(otheritem.innerHTML)
        displaytext.textContent= operator;
    })
})

function handleoperator(op)
{
operator =op;
previousvalue+=cuurentValue;
cuurentValue=""
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
   displaytext.textContent=""
   cuurentValue=""
   previousvalue=""
})

let equals = document.querySelector(".equals")
equals.addEventListener("click", function(e)
{
   displaytext.textContent= operate();
})

function operate()
{
cuurentValue=Number(cuurentValue);
previousvalue=Number(previousvalue);

if(operator==="+")
{
        sum = previousvalue+cuurentValue;
        return sum;
}else if(operator==="-")
{
    diff=previousvalue-cuurentValue;
    return diff;
}else if(operator==="x")
{
    mul = previousvalue*cuurentValue;
    return mul
}else if(operator==="/")
{
    divide = previousvalue/cuurentValue;
    return divide;
}else if(operator==="%")
{
    remainder = previousvalue%cuurentValue;
    return remainder;
}
let undo = document.getElementById("undo")
undo.addEventListener("click", function(e)
{
    console.log(cuurentValue.slice(0,-1));
    
})


}
