const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const inputData = fs.readFileSync(inputPath, 'utf8');
// fs.readFileSync(path[, options]): 이 함수는 동기적으로 파일을 읽어와서 해당 파일의 내용을 문자열 또는 버퍼로 반환한다. 
// 첫 번째 매개변수는 읽을 파일의 경로, 두 번째 매개변수로 옵션을 지정할 수 있는데, 여기서는 문자열 인코딩을 지정하기 위해 'utf8'을 사용했다. 
// 이렇게 하면 파일을 읽을 때 UTF-8 인코딩으로 읽어온다.

function solution(str) {
    const regex = /(<.+?>|\s)/g;
    let result = ''
    let temp = str.split(regex)

    temp.map((char) => {
        if (regex.test(char)) {
            result += char
        } else {
            let reverseSentence = char.split("").reverse().join("");
            result += reverseSentence;
        }
    })
    return console.log(result)
}

solution(inputData)