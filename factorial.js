const iterativeFactorial = (num) => {

    if(num === 0 || num === 1) {
        return 1
    }

    let result = 1;

    for(i = num; i >= 1; i --) {
        result *=  i;
    }

    return result
}

const recursiveFactorial = (num) => {

    if(num === 0 || num === 1) {
        return 1
    }

    return num * recursiveFactorial(num -1)
}

console.log(recursiveFactorial(120))