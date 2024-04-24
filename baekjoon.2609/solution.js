const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
let input = fs.readFileSync(inputPath).toString().trim().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

function solution(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a
}

function solution2(a, b) {
    const result = (a * b) / solution(a, b)
    return result
}

const greatestCommonDivisor = solution(num1, num2);
const leastCommonMultiple = solution2(num1, num2);

console.log(greatestCommonDivisor, leastCommonMultiple)