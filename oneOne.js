//N1
//function elementInStr(str,element){
//    let count = 0;
//    for(let i = 0; i<str.length;i++){
//        if(str[i] === element){
//            count++;
//        }
//    }
//    return count;
//}

//let myStr = 'big dog ';
//console.log(elementInStr(myStr,'g'));

//N2
//function bubbleSort(arr) {
//  for (let i = 0; i < arr.length - 1; i++) {
//    for (let j = 0; j < arr.length - 1 - i; j++) {
//      if (arr[j] < arr[j + 1]) {
//        let temp = arr[j];
//        arr[j] = arr[j + 1];
//        arr[j + 1] = temp;
//      }
//    }
//  }

//  return arr;
//}

//console.log(bubbleSort([2314, 546, 76, 34, 213, 5, 3, 3, 2, 1]));

//N3
//function longestCountryName(arr) {
//    let longestName = '';
//    let longestLength = 0;
  
//    for (let i = 0; i < arr.length; i++) {
//      if (arr[i].length > longestLength) {
//        longestLength = arr[i].length;
//        longestName = arr[i];
//      }
//    }
  
//    return longestName;
//  }
  
//  let countries = ['Italy', 'USA', 'Georgia'];
//  console.log(longestCountryName(countries));

//N4
//function second(arr){
//    let arrSorted = arr.sort(function(a,b){
//        return a-b;
//        });
//    let newArr = [];
//    newArr.push(arrSorted[1]);
//    newArr.push(arrSorted[arrSorted.length-2]);
//    return newArr;
//}

//console.log(second([4,8,1,9,3,10]));

//N5
//function capitalaizeWords(str){
//    let arr = str.split(' ');
//    for (var i = 0; i < arr.length; i++) {
//        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//    }
//    return arr.join(' ');
//}

//console.log(capitalaizeWords('hello bitcamp'));

//N6
//function inOrder(str){
//    let newStr = str.split('');
//    return newStr.sort().join('');
//}

//console.log(inOrder('asfg'));

//N7
//function getAllCombinations(input) {
//  let result = [];

//  for (let i = 0; i < input.length; i++) {
   
//    for (let j = i; j < input.length; j++) {
//      result.push(input.slice(i, j + 1));
//    }
    
//  }

//  return result;
//}

//console.log(getAllCombinations('dog'));

//N8
//function elementInStr(str,element){
//    let count = 0;
//    for(let i = 0; i<str.length;i++){
//        if(str[i] === element){
//            count++;
//        }
//    }
//    return count;
//}

//function notRepeated(string){
//    for(let i = 0; i<string.length;i++){
//        if(elementInStr(string,string[i])<2){
//            return(string[i]);
//        }
//    }
//}

//console.log(notRepeated('abacgcg'));