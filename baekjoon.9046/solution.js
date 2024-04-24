const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const [T, ...testCases] = fs.readFileSync(inputPath).toString().trim().split("\n");
// ["asvdge ef ofmdofn", "xvssc kxvbv", "hull full suua pmlu"]
// const [T, testCases] = fs.readFileSync(inputPath).toString().trim().split("\n");

// console.log(T); // 3
// console.log(testCases); // 'asvdge ef ofmdofn'

function solution(testCase) {
    let frequencyCounter = {};

    // 공백을 제외하고 빈도수를 계산
    for (let val of testCase.replace(/\s+/g, "")) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1; // frequencyCounter[val]가 undefined, null, false, 0, NaN, "" (빈 문자열) 등의 falsy한 값이면 0을 반환.
    }

    // { a: 1, s: 1, v: 1, d: 2, g: 1, e: 2, f: 3, o: 2, m: 1, n: 1 }

    let maxValue = 0;
    let objKey = "";

    // 가장 빈번하게 나타나는 문자 찾기
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > maxValue) {
            maxValue = frequencyCounter[key];
            objKey = key;
        }
    }

    let count = 0;

    // 가장 빈번하게 나타나는 문자의 개수 세기
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] === maxValue) {
            count++;
        }
    }

    // 결과 반환
    return count > 1 ? "?" : objKey;
}

// 각 테스트 케이스에 대해 결과 출력
for (const testCase of testCases) {
    const answer = solution(testCase);
    console.log(answer);
}