//N1
//function sumOfNumbers(arr) {
//  let sum = 0;

//  for (let i = 0; i < arr.length; i++) {
//    sum = sum + arr[i];
//  }

//  console.log(sum);
//}

//const myArr = [1, 2, 3, 4];
//sumOfNumbers(myArr);



//N2
//const myArr = [1, 2, 3];
//function middleOfNumbers(arr) {
//  let middle = 0;

//  for (let i = 0; i < arr.length; i++) {
//    middle = middle+arr[i];
//  }
//  middle = middle/arr.length;
//  console.log(middle);
    
//}

//middleOfNumbers(myArr);


//N3
// function growing(arr){
//     let arrSorted = arr.sort(function(a,b){
//         return a-b;
//     });
//     return arrSorted;
// }

// const myArr=[4,77,2,10,45];
// console.log(growing(myArr));


//N4
//function greaterNum(arr){
//    arr.sort();
//    let lastNum = arr.length - 1;
//    return(arr[lastNum]);
//}

//const myArr = [4,1,9,7];
//console.log(greaterNum(myArr));



//N5
//function smallerNum(arr){
//    arr.sort();
//    return(arr[0]);
//}

//const myArr = [4,9,1];
//console.log(smallerNum(myArr));


//N6
//function findElement(arr,element){
//    if(arr.includes(element)){
//       console.log('array includes the element.')     
//    }
//}

//const myArr = [8,4,6,4,2];
//findElement(myArr,4);



//N7
//function removeNum(arr){
//    arr.pop();
//    arr.shift();
//    return arr;
//}

//const myArr = [4,8,28];
//console.log(removeNum(myArr));



//N8
//function findElement(arr,element){
//    let count = 0;
//    for(let i = 0; i < arr.length; i++){
//        if(arr[i]===element){
//            count++;
//        }
//    }   
//    return count;
//}

//const myArr = [8,4,6,4,2];
//console.log(findElement(myArr,4));

//N9
//function sumOfEven(arr){
//    let count = 0;
//    for(let i = 0; i<arr.length; i++){
//        if(arr[i] % 2 === 0){
//            count=count+arr[i];
//        }
//    }
//    console.log(count);
//}
//let myArr = [1,2,3,4]
//sumOfEven(myArr);

//N10
//function secondGreat(arr){
//    arr.sort();
//    return arr[1];
//}

//let myArr = [4,6,8,1];
//console.log(secondGreat(myArr));

//N11
//function twoArr(arr1, arr2) {
//    if (arr1.length !== arr2.length) {
//      return false;
//    }
  
//    for (let i = 0; i < arr1.length; i++) {
//      if (arr1[i] !== arr2[i]) {
//       return false;
//      }
//    }
  
//    return true;
//  }
  
// let array1 = [1, 2, 3];
//  let array2 = [1, 2, 3, 4];
//  console.log(twoArr(array1, array2));

//N12
//function sum(arr1, arr2) {
//  let arr3 = arr1.concat(arr2);
//  return arr3.sort((a, b) => a - b);
//}

//let myArr1 = [3,1,4];
//let myArr2 = [9,2,5];
//console.log(sum(myArr1,myArr2));

//N13
//function byAlphabet(arr){
//    return arr.sort();
//}

//let txt = ['b','d','a','f'];
//console.log(byAlphabet(txt));

//N14
// function findCommonElement(...arrays) {
//     let commonElements = [];
//     let baseArr = arrays[0];
//     for (let i = 0; i < baseArr.length; i++) {
//       let includes = true;
//       for (let j = 1; j < arrays.length; j++) {
//         if (!arrays[j].includes(baseArr[i])) {
//           includes = false;
//           break;
//         }
//       }
//       if (includes) {
//         commonElements.push(baseArr[i]);
//       }
//     }
  
//     return commonElements;
//   }
  
//   console.log(findCommonElement([1, 2, 3, 2], [2, 3, 4, 2], [4, 5, 3, 2, 1, 6]));

//15
//let car = {
//  brand: 'mercedes',
//  model: 'gClass',
//  year: 2019
//        };

//console.log(car);

//N16
//let car = {
//  brand: 'mercedes',
//  model: 'gClass',
//  year: 2019
//  start:function(){
//      return 'The car is starting.';
//}
//        };

//console.log(car.start);

//N17
//let person = {
//    name: 'Mariam',
//    age: 16,
//    city: 'Tbilisi',
//}

//console.log(person.name);

//N18
//let person = {
//        name: 'Mariam',
//        age: 16,
//        city: 'Tbilisi',
//    }

//person.job = 'programming';

//console.log(person);