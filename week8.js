//1.Callback Basics: Write a function that takes a callback as an argument and calls it after a delay of 1 second.

// setTimeout(() => console.log("Hi"), 1000);

//2.Promise Basics: Create a promise that resolves after 2 seconds and logs a success message.

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Success');
//     }, 2000);
//   });

//   myPromise.then((message) => {
//     console.log(message);
//   });

//3.Promise Chain: Create a chain of promises where each resolves after 1 second and logs a message.

// let num = Math.random();

// let promiseOne = new Promise((resolve,reject)=> {

//     if(num>0.5){
//         resolve(num);
//     }else{
//         reject('Error');
//     }

// })

// let promiseTwo = new Promise((resolve,reject)=>{
//     resolve(num*2);
// })

// promiseOne
//   .then(setTimeout((result) => {
//     return promiseTwo;
//   },1000))
//   .then((finalResult) => {
//     console.log(finalResult);
//   })
//   .catch((errorMessage) => {
//     console.log(errorMessage);
//   });

//4.Async/Await: Write an asynchronous function using async/await that simulates fetching data from an API after 2 seconds.
//5.Error Handling: Modify the previous example to include error handling using try/catch.

async function gettingData() {
  try {
    let response = await fetch("https://jsonplaceholder.typico/todos/1");
    let data = await response.json();
  } catch (error) {
    console.log("Failed");
  }
}

setTimeout(() => gettingData(), 100);
setTimeout(() => console.log("hi"), 500);

//6.Fetch API: Use the Fetch API to make a simple GET request to a mock API and log the response.
// 7.Async Function with Fetch: Create an asynchronous function that uses the Fetch API to get data from an API and log it.

// async function gettingApi() {
//   let answer = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   return await answer.json();
// }

// gettingApi()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log("Error");
//   });
