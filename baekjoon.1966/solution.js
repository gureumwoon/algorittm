const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const [n, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");

function solution(n, input) {
    let result = [];
    for (let i = 0; i < n; i += 1) {
        let [N, M] = input.shift().split(' ').map(Number);
        let priority = input.shift().split(' ').map(Number);

        let cnt = 1;

        while (true) {
            let max = Math.max(...priority);
            let cur = priority.shift();

            if (cur >= max && M === 0) {
                result.push(cnt);
                break;
            } else if (cur < max && M === 0) {
                priority.push(cur);
                M = priority.length - 1;
            } else if (cur >= max) {
                cnt += 1;
                M -= 1;
            } else if (cur < max) {
                priority.push(cur);
                M -= 1;
            }
        }
    }

    console.log(result.join('\n'));
}

solution(n, input);