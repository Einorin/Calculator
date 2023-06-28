const output = document.querySelector('.output')
const btns = document.querySelectorAll('.btn')
btns.forEach((button) =>{
    button.addEventListener('click', ()=>{
        let displayValue = []
        if(button.className === "btn one"){
            displayValue.push(output.textContent += 1)
        }else if(button.className === "btn two"){
            output.textContent += 2
        }else if(button.className === "btn three"){
            output.textContent += 3
        }else if(button.className === "btn four"){
            output.textContent += 4
        }else if(button.className === "btn five"){
            output.textContent += 5
        }else if(button.className === "btn six"){
            output.textContent += 6
        }else if(button.className === "btn seven"){
            output.textContent += 7
        }else if(button.className === "btn eight"){
            output.textContent += 8
        }else if(button.className === "btn nine"){
            output.textContent += 9
        }else if(button.className === "btn zero"){
            output.textContent += 0
        }else if(button.className === "btn add ope"){
            output.textContent += "+"
            displayValue.concat(["+"])
        }
    })
})


function add(x,y){
    let num1 = x
    let operator = '+';
    let num2 = y;
    return x + y
}
function subtract(x,y){
    let num1 = x;
    let operator = '-';
    let num2 = y;
    return num1 - num2
}
function multiply(x,y){
    let num1 = x;
    let operator = 'x'
    let num2 = y;
    return num1 * num2
}
function divide(x,y){
    let num1 = x;
    let operator = "/";
    let num2 = y;
    return num1  / num2
}

function operate(operator,num1,num2){
    if (operator === "+"){
        return add(num1,num2);
    }else if (operator === "-"){
        return subtract(num1,num2)
    }else if (operator === "x"){
        return multiply(num1,num2)
    }else if (operator === "/"){
        return divide(num1,num2)
    }
}

