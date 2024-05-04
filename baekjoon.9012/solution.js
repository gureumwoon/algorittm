const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const inputData = fs.readFileSync(inputPath).toString().trim().split('\n')
const count = Number(inputData[0])
const result = [];

// function solution(input) {
//     for (let i = 1; i <= count; i++) {
//         let vpsCount = 0;
//         for (let j = 0; j < input[i].length - 1; j++) {
//             input[i][j] === '(' ? vpsCount += 1 : vpsCount -= 1;
//             if (vpsCount < 0) break;
//         }
//         result.push(vpsCount === 0 ? 'YES' : 'NO');
//     }
//     return console.log(result.join('\n'))
// }

// solution(inputData)


function solution2(input) {
    for (let i = 1; i <= count; i++) {
        const cases = input[i];
        const stack = [];
        let result = 'YES';

        for (let j = 0; j < cases.length - 1; j++) {
            if (cases[j] === '(') {
                stack.push(1);
            } else { // ')' 일 때  pop할 게 없으면 'NO' 왜냐면 ')'일 때 pop할 게 잇다는 건 '('가 있다는 건데 pop할 게 없으면 ')'얘가 먼저 오게 된다는 거니까 '()'이 모양이 유지가 안 돼 그래서 'NO'
                if (!stack.pop()) { // stack에서 pop했는데 비어있으면 (stack이 비어있으면)
                    result = 'NO';
                    break;
                }
            }
        }

        if (stack.length !== 0) {
            result = 'NO';
        }
        console.log(result);
    }
}

solution2(inputData)
