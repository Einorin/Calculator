const output = document.querySelector('.output')
const btns = document.querySelectorAll('.btn')
let num1 = ""
let num2 = ""
let operator = ""
btns.forEach((button) =>{
    button.addEventListener('click', ()=>{
        if(button.className === "btn one"){
            output.textContent += 1
            if(operator === ""){
                num1 += "1"
            }else if(num2 === ""){
                num2 += '1'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '1'
            }else{
                num1 += "1"
            };
        }else if(button.className === "btn two"){
            output.textContent += 2
            if(operator === ""){
                num1 += "2"
            }else if(num2 === ""){
                num2 += '2'
            }else if(num2 === ""){
                num2 += '2'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '2'
            }else{
                num1 += "2"
            };
        }else if(button.className === "btn three"){
            output.textContent += 3
            if(operator === ""){
                num1 += "3"
            }else if(num2 === ""){
                num2 += '3'
            }else if(num2 === ""){
                num2 += '3'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '3'
            }else{
                num1 += "3"
            };
        }else if(button.className === "btn four"){
            output.textContent += 4
            if(operator === ""){
                num1 += "4"
            }else if(num2 === ""){
                num2 += '4'
            }else if(num2 === ""){
                num2 += '4'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '4'
            }else{
                num1 += "4"
            };
        }else if(button.className === "btn five"){
            output.textContent += 5
            if(operator === ""){
                num1 += "5"
            }else if(num2 === ""){
                num2 += '5'
            }else if(num2 === ""){
                num2 += '5'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '5'
            }else{
                num1 += "5"
            };
        }else if(button.className === "btn six"){
            output.textContent += 6
            if(operator === ""){
                num1 += "6"
            }else if(num2 === ""){
                num2 += '6'
            }else if(num2 === ""){
                num2 += '6'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '6'
            }else{
                num1 += "6"
            };
        }else if(button.className === "btn seven"){
            output.textContent += 7
            if(operator === ""){
                num1 += "7"
            }else if(num2 === ""){
                num2 += '7'
            }else if(num2 === ""){
                num2 += '7'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '7'
            }else{
                num1 += "7"
            };
        }else if(button.className === "btn eight"){
            output.textContent += 8
            if(operator === ""){
                num1 += "8"
            }else if(num2 === ""){
                num2 += '8'
            }else if(num2 === ""){
                num2 += '8'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '8'
            }else{
                num1 += "8"
            };
        }else if(button.className === "btn nine"){
            output.textContent += 9
            if(operator === ""){
                num1 += "9"
            }else if(num2 === ""){
                num2 += '9'
            }else if(num2 === ""){
                num2 += '9'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '9'
            }else{
                num1 += "9"
            };
        }else if(button.className === "btn zero"){
            output.textContent += 0
            if(operator === ""){
                num1 += "0"
            }else if(num2 === ""){
                num2 += '0'
            }else if(num2 === ""){
                num2 += '0'
            }else if(num2.length > 0 && operator !== ""){
                num2 += '0'
            }else{
                num1 += "0"
            };
        }else if(button.className === "btn add ope"){
            output.textContent += "+"
            operator = "+"
        }else if(button.className === "btn minus ope"){
            output.textContent += "-"
            operator = "-"
        }else if(button.className === "btn multiply ope"){
            output.textContent += "x"
            operator = "x"
        }else if(button.className === "btn divide ope"){
            output.textContent += "/"
            operator = "/"
        }else if(button.className === "btn delete ope"){
            output.textContent = "";
            num1 = '';
            num2 = '';
            operator = '';
        }else if(button.className === "btn equal ope"){
            let result = operate(operator,num1,num2);
            output.textContent = result
            num1 = result.toString();
            num2 = '';
            operator = "";
        }
    })
})

// PS I know I can do this instead
// funtion add (x,y){
//   return x + y
//} :>
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
    num1 = parseInt(num1)
    num2 = parseInt(num2)
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

