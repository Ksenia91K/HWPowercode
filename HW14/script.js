//let price = +prompt('Введите цену товара');

//if(price < 100){
    //console.log('Это дешево');
//} else if(price > 100){
    //console.log('Это дорого');
//}

let price = +prompt('Введите цену товара');

let text = price < 100 ? 'Это дешево' : 'Это дорого';

console.log(text)