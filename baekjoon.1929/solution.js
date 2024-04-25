const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf-8').trim().split(' ').map(Number);
const num1 = input[0]
const num2 = input[1]
const result = [];

// 첫 번째 답안 (시간 초과)
// function solution(a, b) {
//     for (let i = a; i <= b; i++) {
//         result.push(i)
//     }
//     for (let i = 2; i <= Math.sqrt(b); i++) {
//         for (let j = 0; j < result.length; j++) {
//             if (result[j] > i && result[j] % i === 0) {
//                 result.splice(j, 1);
//             }
//         }
//     }
//     return result.join("\n")
// }

// const answer = solution(num1, num2)
// console.log(answer)

// 에라토스테네스의 체 알고리즘
function solution(a, b) {
    const isPrime = new Array(b + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(b); i++) {
        if (!isPrime[i]) continue;
        for (let j = i ** 2; j <= b; j += i) {
            isPrime[j] = false;
        }
    }

    for (let i = a; i <= b; i++) {
        if (isPrime[i]) {
            result.push(i)
        }
    }
    return result.join("\n")
}

const answer = solution(num1, num2)
console.log(answer)
