//N1
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//N2
// function findLongestWord(str){
//   let words = str.split(' ');
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++){
//       if(words[i].length > longestWord.length){
//       longestWord = words[i];
//      }
//   }
//   console.log(longestWord);
// }
// findLongestWord("Hello bitcamp");




//N3
// for(let i = 1; i < 20; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

//N4
//let number = Number(prompt("Enter number:"));
// for (let numm = 1; numm <= number; numm ++){
//     console.log("Hello");
// }

//N5
// let sum = 0;
// for ( let numbers = 1; numbers <= 100; numbers ++){
//     sum += numbers;
// }
// console.log(sum);

//N6
//let monthNumber = +prompt('Enter month number: ');

// switch(monthNumber){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(31);
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(30);
//         break;
//     case 2:
//         console.log('28 or 29');
//         break;
//     default:
//     console.log('Wrong input');
// }

//N7
// let secretNum = 4;
// let userNum = Number(prompt('Enter number: '));

// while (userNum !== secretNum){
//     userNum=Number(prompt('Enter again: '));
// }

// console.log('Congrats!');

//N8
//   function grades(){
//     //let grade = Number(prompt('Enter grade: '));
    
//     if(grade > 90 && grade <=100){
//         console.log("You got an A!");
//     } else if(grade <= 90 && grade > 80) {
//         console.log("You got a B!");
//     }else if(grade <= 80 && grade > 70){
//         console.log("You got a C!");
//     }else if(grade <= 70 && grade >60){
//         console.log("You got a D.");
//     }else {
//         console.log("You got a F.");
//     }
// }

//N9
// let password = '12345';
// //let askPassword = prompt('Enter password: ');

// while(askPassword !== password){
//     askPassword = prompt('Wrong password. Try again: ');
// }

//10
// function sumDigits(x,y){
//     console.log('The sum of ' + x + y + ' is ' + (x+y));
// }

// sumDigits(4,4);
// //N11
// function countBs(str){
//     let bCounter = 0;
//     for (let i = 0; i<str.length; i++){
//         if(str[i] == 'B'){
//            bCounter++;
//         }
//     }
//     console.log(bCounter);
// }

// countBs('Bitcamp');