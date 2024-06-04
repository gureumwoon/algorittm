const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const [n, ...testCases] = fs.readFileSync(inputPath).toString().trim().split("\n");

const postFix = testCases.shift().split("");
const numArr = testCases.map((item) => Number(item));

const postFixObject = {};

for (let i = 0; i < n; i++) {
    postFixObject[String.fromCharCode(i + 65)] = numArr[i]
}

const operators = ["+", "-", "*", "/"];

const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
}

function solution() {
    const stack = [];

    const numWithStr = postFix.map((str) =>
        operators.includes(str) ? str : postFixObject[str]
    ) // ['1', '2', '3', '*', '+', '4', '5', '/', '-']

    for (let i = 0; i < postFix.length; i++) {
        let singleStr = numWithStr[i];

        if (operators.includes(singleStr)) {
            let back = stack.pop();
            let front = stack.pop();

            let calculatorFunc = calculator[singleStr];

            singleStr = calculatorFunc(front, back);
        }
        stack.push(singleStr);
    }
    return stack[0].toFixed(2)
}


const result = solution()
console.log(result)