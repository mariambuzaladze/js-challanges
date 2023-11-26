function primeNumberGenerator(str) {
    let userArr = str.split(" ");
    let primeArr = [];
    for (let i = 0; i < userArr.length; i++) {
        let number = Number(userArr[i]);
        let isPrime = true;

        if (number === 1) {
            isPrime = false;
        }else{
            for (let j = 2; j <= Math.sqrt(number); j++) {
                if (number % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeArr.push(number);
        }
    }

    return primeArr;
}

function showPrimeNums(){
    let userNums = document.getElementsByTagName('input')[0].value;
    let primeNumbers = primeNumberGenerator(userNums);
    
    let paragraph = document.createElement("p");
    paragraph.textContent=primeNumbers;
    document.body.append(paragraph);
}
