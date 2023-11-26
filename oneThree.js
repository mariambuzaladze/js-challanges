//N1
//function deepCompare(obj1, obj2) {
//    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
//      return false; 
//    }
  
//    const keys1 = Object.keys(obj1);
//    const keys2 = Object.keys(obj2);
  
//    if (keys1.length !== keys2.length) {
//      return false; 
//    }
  
//    for (const key of keys1) {
//      if (!deepCompare(obj1[key], obj2[key])) {
//        return false; 
//      }
//    }
  
//    return true;
//  }
  
//  const myObj1 = { a: 1, b: { c: 2 } };
//  const myObj2 = { a: 1, b: { c: 2 } };
  
//  console.log(deepCompare(myObj1, myObj2)); 
  

//N2
//function arrOfObjects(arr,keyProp,valueProp){
//    let myObj = {};
//    for (let obj of arr) {
//        let key = obj[keyProp];
//        let value = obj[valueProp];
//        myObj[key] = value;
//      }
    
//      return myObj;
//}

//let myArr =  [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
//console.log(arrOfObjects(myArr,'id','name'));


//N3
//function objToString(obj){
//    return JSON.stringify(obj);
//}

//let myObj = { a: 1, b: { c: 2 } };
//console.log(objToString(myObj));


//N4
// Array.prototype.sum = function () {
//   let total = 0;

//   for (let i = 0; i < this.length; i++) {
//     if (typeof this[i] === 'number') {
//       total += this[i];
//     }
//   }

//   return total;
// };

// let myArray = [1, 2, 3, 4, 5];
// let result = myArray.sum();
// console.log(result); 


//N5
// class parent {
//     constructor(name){
//         this.name=name;
//     }

//     eyeColor(){
//         console.log(`${this.name} has blue eyes.`);
//     }
// }

// class child extends parent {
//     constructor(name){
//         super(name);
//     }

//     eyeColor(){
//         super.eyeColor();
//     }
// }

// let myChild = new child(`Mariam`);
// myChild.eyeColor();