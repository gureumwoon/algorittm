const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const inputData = fs.readFileSync(inputPath).toString().trim().split('\n')
const count = Number(inputData[0])
const result = [];
console.log("inputData:", inputData[1].length)

function solution(input) {
    for (let i = 1; i <= count; i++) {
        let vpsCount = 0;
        for (let j = 0; j < input[i].length - 1; j++) {
            input[i][j] === '(' ? vpsCount += 1 : vpsCount -= 1;
            if (vpsCount < 0) break;
        }
        result.push(vpsCount === 0 ? 'YES' : 'NO');
    }
    return console.log(result.join('\n'))
}

solution(inputData)