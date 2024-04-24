let fs = require('fs');
const [n, input] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const inputArr = input.split(" ")
const numList = inputArr[0].split('').map(Number)
const num = Number(n)

function solution(num, numList) {
    let amount = 0
    for (let i = 0; i < num; i++) {
        amount += numList[i]
    }
    return console.log(amount)
}

solution(num, numList)

function solution2(numList) {
    return numList.reduce((acc, cur) => acc + cur)
}

solution2(numList)
