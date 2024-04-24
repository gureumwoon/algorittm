const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath).toString().trim().split('');

const upperCaseInput = input.map((char) => char.toUpperCase());

function solution(input) {
    let frequencyCounter = {}
    for (let val of input) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }

    let frequencyValue = 0;
    let objKey = '';
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > frequencyValue) {
            frequencyValue = frequencyCounter[key]
            objKey = key;
        }
    }

    let count = 0;
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] === frequencyValue) {
            count++;
        }
    }

    return console.log(count > 1 ? '?' : objKey)
}

solution(upperCaseInput)



