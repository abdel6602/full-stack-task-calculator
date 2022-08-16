const input = document.getElementById('input');
const num1 = document.getElementById('1');
const num2 = document.getElementById('2');
const num3 = document.getElementById('3');
const num4 = document.getElementById('4');
const num5 = document.getElementById('5');
const num6 = document.getElementById('6');
const num7 = document.getElementById('7');
const num8 = document.getElementById('8');
const num9 = document.getElementById('9');
const num0 = document.getElementById('0');

const clearBtn = document.getElementById('clear');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalBtn = document.getElementById('equal');

var operand1 = 0;
var operand2 = 0;
var operator;

function writeNum(number){
    input.value += number;
}

function calc(operand2){
    if(operator === 'plus'){
        return parseInt(operand1) + parseInt(operand2);
    }
    if(operator === 'minus'){
        return parseInt(operand1) - parseInt(operand2);
    }
    if(operator === 'mult'){
        return parseInt(operand1) * parseInt(operand2)
    }
    if(operator === 'divide'){
        return parseFloat(operand1) / parseFloat(operand2)
    }
}


num1.addEventListener('click', function(){
    writeNum('1');
})

num2.addEventListener('click', function(){
    writeNum('2');
})

num3.addEventListener('click', function(){
    writeNum('3');
})

num4.addEventListener('click', function(){
    writeNum('4');
})

num5.addEventListener('click', function(){
    writeNum('5');
})

num6.addEventListener('click', function(){
    writeNum('6');
})

num7.addEventListener('click', function(){
    writeNum('7');
})

num8.addEventListener('click', function(){
    writeNum('8');
})


num9.addEventListener('click', function(){
    writeNum('9');
})

num0.addEventListener('click', function(){
    writeNum('0');
})

clearBtn.addEventListener('click', function(){
    input.value = "";
})

plusBtn.addEventListener('click', function(){
    operand1 = input.value;
    input.value = "";
    operator = 'plus';
})

minusBtn.addEventListener('click', function(){
    operand1 = input.value;
    input.value = "";
    operator = 'minus';
})

multiplyBtn.addEventListener('click', function(){
    operand1 = input.value;
    input.value = "";
    operator = 'mult';
})

divideBtn.addEventListener('click', function(){
    operand1 = input.value;
    input.value = "";
    operator = 'divide';
})

equalBtn.addEventListener('click', function(){
    operand2 = input.value;
    input.value = calc(operand2);
})