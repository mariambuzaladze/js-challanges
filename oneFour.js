//N1
// function palindrome(str){
//    let reversedStr = str.split('').reverse().join('');
//    for(let i = 0; i<str.length ;i++){
//        if(str[i]===reversedStr[i]){
//            return true;
//        }
//    }
    
// }

// console.log(palindrome('mom'));


//N2
// let userNumber = parseInt(prompt('Enter number:'));

// function fibonacci(number) {
//     let numbers = [0, 1];

//     for (let i = 2; i < number; i++) {
//         let nextNumber = numbers[i - 1] + numbers[i - 2];
//         if(nextNumber<=number){
//             numbers.push(nextNumber);
//         }
//     }

//     console.log(numbers);
// }

// fibonacci(userNumber);


//N3
// let rows = parseInt(prompt("Enter number of rows: "));

// function generateDiamond() {
//   if (rows % 2 === 0) {
//     return;
//   }

//   let diamond = "";
//   const midPoint = Math.ceil(rows / 2);
//   for (let i = 1; i <= rows; i++) {
//     const spaces = Math.abs(midPoint - i);
//     const asteriks = rows - 2 * spaces;

//     const row = " ".repeat(spaces) + "*".repeat(asteriks);
//     diamond += row + "\n";
//   }

//   console.log(diamond);
// }

// generateDiamond();


//N4
// function primeNumberGenerator(arr) {
//     let userArr = arr.split(" ");
//     let primeArr = [];
//     for (let i = 0; i < userArr.length; i++) {
//         let number = Number(userArr[i]);
//         let isPrime = true;

//         for (let j = 2; j <= Math.sqrt(number); j++) {
//             if (number % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             primeArr.push(number);
//         }
//     }

//     return primeArr;
// }

// let userNums = prompt('Enter numbers separated by spaces: ');

// console.log(primeNumberGenerator(userNums));


//N5
// const min = 1;
// const max = 100;
// const randomNum = Number(Math.floor(Math.random() * (max - min + 1)) + min);

// function guessTheNum(randomNum) {
//     let userNum;
//     let attempts = 0;

//     while (true) {
//         userNum = prompt('Guess the number: ');
//         attempts++;

//         if (userNum === null) {
//             return 'You quit the game.';
//         }

//         userNum = Number(userNum);

//         if (isNaN(userNum)) {
//             alert('Please enter a valid number.');
//         } else if (userNum < randomNum) {
//             alert('Too low. Try again.');
//         } else if (userNum > randomNum) {
//             alert('Too high. Try again.');
//         } else {
//             return `Congratulations! You guessed the number ${randomNum} in ${attempts} attempts.`;
//         }
//     }
// }

// console.log(guessTheNum(randomNum));