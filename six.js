//N1
//function generateRandomNumber(min,max){
//    return Math.floor(Math.random() * (max - min) + min);
//}

//console.log(generateRandomNumber(4,8));

//N2
//function capitalaizeWords(str){
//    let arr = str.split(' ');
//    for (var i = 0; i < arr.length; i++) {
//        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//    }
//    return arr;
//}

//console.log(capitalaizeWords('hello bitcamp'));

//N3
//function arrOfObjects(arr, key) {
//    let arr1 = [];
//    for (let i = 0; i < arr.length; i++) {
//      if (arr[i].hasOwnProperty(key)) {
//        arr1.push(arr[i][key]); 
//      }
//    }
//    return arr1;
//  }
  
//  let myArr = [{ name: "mariami", age: 16 }, { name: "nika", age: 20 }];
//  console.log(arrOfObjects(myArr, 'name')); 

//N4
//function pangram(str,alph){
//    let newStr = str.toUpperCase();
//    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//    for(let i = 0; i < alphabet.length; i++){
//        if(newStr.includes(alphabet[i])){
//            continue;
//        }else{
//            return false;
//        }
//    }
//    return true;
//}

//console.log(pangram('abcdefghijklmnopqrstuvwxyz'));

//N5
//let string = "my name is temo the a a the is";
//string = string.replace(/\b(the|is|a)\b/gi, "");
//console.log(string);

//N6
//function falseInArr(arr){
//    arr = arr.filter(Boolean);
//    return arr;
//}

//let myArr = [4,'','Hi',false];
//console.log(falseInArr(myArr));

//N7
//function reversed(str){
//    str = str.split(' ');
//    let reversedStr = str.reverse();
//    reversedStr = reversedStr.join(' ');
//    return reversedStr;
//}

//console.log(reversed('cats and dogs'));

//N8
//function palindrome(str){
//    let reversedStr = str.split('').reverse().join('');
//    return str === reversedStr
    
//}

//console.log(palindrome('mom'));

//N9
//function max(arr){
//    let maxx = 0;
//    for(let i = 0; i < arr.length;i++){
//        if(arr[i]>maxx){
//            maxx = arr[i];
//        }
//    }
//    return maxx;
//}

//let myArr = [2,4,7,1,8];
//console.log(max(myArr));

//N10
//function sum(arr){
//    let count = 0;
//    for(let i = 0; i < arr.length;i++){
//        count+=arr[i];
//    }
//    return count;
//}

//let myArr = [2,4,8,9];
//console.log(sum(myArr));