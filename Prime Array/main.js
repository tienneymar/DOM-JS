function checkPrime(e) {
    var flag = true;
    if (e < 2) {
        flag = false;
    }
    for (let i = 2; i < e - 1; i++) {
        if (e % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function primeArray(arr) {
    var notPrimes = [];
    arr.forEach((e) => {
        if (!checkPrime(e)) {
            notPrimes.push(e);
        }
    });
    return notPrimes.length > 0
        ? `primeArray([${arr}]) = false <br /> <br />
        Because ${notPrimes} is not prime`
        : `primeArray([${arr}]) = true <br /> <br />
        Because all element are prime`;
}

const content = document.querySelector(".content");
content.innerHTML = primeArray([2, 2, 11, 12, 15]);
