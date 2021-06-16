//let str = prompt('Введите строку');

//console.log(str.charAt(0).toUpperCase() + str.substr(1));



let u1, u2, u3, u4, u5, u6;
let t1, r2, r3, r4, r5, r6;
let min = 1,
    maw = 36;
let result = 0;


setNums();
setRandomNums();
showNums();


function showNums(){
    console.log('Числа что Вы ввели', u1,u2,u3,u4,u5,u6);
    console.log('Числа что выпали', checkNumber(r1), checkNumber(r2),checkNumber(r3),checkNumber(r4),checkNumber(r5),checkNumber(r6))
}

function checkNumber(){
    let check = n === u1 || n === u2 || n === u3 || n === u4 || n === u5 || n === u6;
    if(check){
        result++;
    }
   return `${n} - ${check ? 'yes' : 'no'}`;
}


function setRandomNums(){
    r1 = getRandom();
    r2 = getRandom();
    r3 = getRandom();
    r4 = getRandom();
    r5 = getRandom();
    r6 = getRandom();
}
    



function setNums(){
    u1 = +prompt('Введите 1 число от 1 до 36');
    u2 = +prompt('Введите 2 число от 1 до 36');
    u3 = +prompt('Введите 3 число от 1 до 36');
    u4 = +prompt('Введите 4 число от 1 до 36');
    u5 = +prompt('Введите 5 число от 1 до 36');
    u6 = +prompt('Введите 6 число от 1 до 36');
}

function getRandom(){
    return Math.floor(Math.random() * (max - min)) + min;
}