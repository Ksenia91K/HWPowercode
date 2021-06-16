// let obj = {
//	bread: 25,
//	milk: 30,
//	chips: 50,
//	water: 10,
//	cucumbers: 42
//}
//
// let sum = 0;
// let bigPrice = 0;
// let product = '';
//let smallPrice = Infinity;
// let cheap = '';
//
//for(let key in obj){
//    sum += obj[key]
//    if (obj[key] > bigPrice){
//        bigPrice = obj[key]
//        product = key;
//    }
// if (obj[key] < smallPrice){
//     smallPrice = obj[key];
//     smallPrice = key
// }
//}
//
//console.log('Общая стоимость покупок: ', sum)
//console.log('Самый дорогой товар: ', product)
//console.log('Самый дешевый товар: ', cheap)
//
//
// 
//function doubleArr(arr){
//    let newArray = [];
//   for(let i = 0; i < arr.length; i++){
//       console.log(arr[i]*2)
//   }
//    return newArray
//}

//function fizzBuzz(n){
 //   console.log(n)
//}



//let count = +prompt('Введите количество');
// fizzBuzz(count);



//function fizzBuzz(n){
  // fo//r(let i = 0; i < n; i++){
      // if(i%3 === 0){
         //  console.log('fizz')
       //} else if (i%5 === 0){
          // console.log('buzz')
      // } else if (i%3 === 0 && i%5 === 0){
          // console.log('fizz-buzz')
       //}else {
         //  console.log(i)
      // }
   //}
//}



let films = [
    {
        title: "Joker",
        rating: 8.1,
        premier: true
    },
{
        title: "Iron Man",
        rating: 7,
        premier: true
    },
    {
        title: "Thor",
        rating: 7.5,
        premier: false
    },
    {
        title: "Hulk",
        rating: 8.5,
        premier: false
    }

]
let sumRating = 0;
for (let i = 0; i < films.length; i++){
    sumRating += films[i].rating;
}
console.log('средняя оценка - ',sumRating/films.length)















 

 
 
 
 
 
 
 
 
 
 
 