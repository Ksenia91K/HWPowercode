//let max = 7;
//let min = 1;

//let r1 = Math.floor(Math.random() * (max - min)) + min;
//let r2 = Math.floor(Math.random() * (max - min)) + min;

//console.log('Выпало:' + r1);
//console.log('Выпало:' + r2);

//let start = 1;
//let step = 3;

//for(let i = 0; i < 50; i++){
   // console.log(start)
   // start += step
//};

let n1 = 0;
let n2 = 1;

for(let i = 0; i < 50; i++){
    let n3 = n1 + n2;
    console.log(n3)
    n1 = n2;
    n2 = n3
}

  


  