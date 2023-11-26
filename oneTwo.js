//N1
// function maxSubarraySum(arr) {
//     let sumOfArr = [];
//     for(let i = 0; i<arr.length;i++){
//         let sum = 0;
//         for(let j = i; j<arr.length;j++){
//             sum+=arr[j];
//             sumOfArr.push(sum);
//         }
//     }
//     return Math.max(...sumOfArr);
//  }
  
//  let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//  console.log(maxSubarraySum(array));




//N2
//function rotateArr(arr,positions){
//    if (positions <= 0) {
//        return arr; 
//      }
     
//    let rotated = arr.slice(positions).concat(arr.slice(0, positions));
//    return rotated;
//}

//let myArr = [1,2,3,4,5,6,7];
//console.log(rotateArr(myArr,3));


//N3
//function missingNum(arr){
//    arr = arr.sort((a, b) => a - b);
//    for(let i = 0; i < arr.length;i++){
//        if(arr[i] + 1 != arr[i+1]){
//            return arr[i]+1;
//        }
//    }
//    return arr[arr.length-1]+1;
//}

//let myArr = [3,0,1];
//console.log(missingNum(myArr));


//N4
// function mergeIntervals(intervals) {
//     intervals.sort((a, b) => a[0] - b[0]);

//     let mergedIntervals = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//         let currentInterval = intervals[i];
//         let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

//         if (currentInterval[0] <= lastMergedInterval[1]) {
//             lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
//         } else {
//             mergedIntervals.push(currentInterval);
//         }
//     }

//     return mergedIntervals;
// }

// let myArr = [[1, 3], [2, 6], [8, 10], [15, 18]];
// console.log(mergeIntervals(myArr));