const input = document.getElementById('input');
const answer = document.getElementById('answer');

function getNumber(num){
    switch(num){
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 7:
            input.value += '7';
            break;
        case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
        case 0:
            input.value += '0';
            break;
    }
}

function myOprate(op){
    switch(op){
        case '+':
            input.value += '+';
            break;
        case '-':
            input.value += '-';
            break;
        case '/':
            input.value += '/';
            break; 
        case '*':
            input.value += '*';
            break;  
        case '.':
            input.value += '.';
            break; 
    }
}
function compasion(){
    answer.value = +eval(input.value)
}
function myRemove(){
    input.value = '';
    answer.value = '';
}
function myChanges(){
    document.body.style.backgroundColor = 'black';
    document.querySelector('.fa-moon').style.display = 'none';
    document.querySelector('.fa-sun').style.display = 'block';
    var result = document.getElementById('equal');
    result.style.backgroundColor = 'white';
    result.style.color = 'black';
}
function mySun(){
    document.body.style.backgroundColor = 'aqua';
    document.querySelector('.fa-moon').style.display = 'block';
    document.querySelector('.fa-sun').style.display = 'none';
    var result = document.getElementById('equal');
    result.style.backgroundColor = 'black';
    result.style.color = 'white';
}
