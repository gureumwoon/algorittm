const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf-8').trim();

function solution(num) {
    let octalNumber = '';
    let spliceNum = ''
    for (let i = input.length - 1; i >= 0; i -= 3) {
        spliceNum = num.slice(Math.max(0, i - 2), i + 1);
        if (spliceNum.length < 3) {
            spliceNum = "0" + spliceNum;
        }
        octalNumber = parseInt(spliceNum, 2).toString(8) + octalNumber;
    }
    return console.log(octalNumber)
}

solution(input)
