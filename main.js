let result = 0;

let main = document.getElementById("root");

var divResult = document.createElement("div");
divResult.classList.add("result-wrapper");


main.appendChild(divResult);



function GeneraButton(className, content)
{
    let button = document.createElement("button");
    this.className=className;
    button.innerHTML=content;
    button.classList.add(className);
    main.appendChild(button);

}

GeneraButton("btn-result", result);
GeneraButton("btn-plus", "+");
GeneraButton("btn-minus", "-");
GeneraButton("btn-reset", "RESET");


const plusButton=document.querySelector(".btn-plus");
const resultButton=document.querySelector(".btn-result")
const minusButton=document.querySelector(".btn-minus")
const resetButton=document.querySelector(".btn-reset")




function incrementResult(result)
{
    result=result+1;
    return result;
    
}
function decrementResult(result)
{
    result=result-1;
    return result;
}
function resetResult(result)
{
    result=0;
    return result;
}

plusButton.addEventListener("click", ()=>{
    result=incrementResult(result);
    resultButton.innerHTML=result;
})

minusButton.addEventListener("click", ()=>{
    result=decrementResult(result);
    resultButton.innerHTML=result;
})

resetButton.addEventListener("click", ()=>{
    result=resetResult(result);
    resultButton.innerHTML=result;
})


