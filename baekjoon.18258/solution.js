const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, 'input.txt');
const [n, ...testCases] = fs.readFileSync(inputPath).toString().trim().split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data); // 새로운 노드 생성
    if (!this.head) { // 큐가 비어 있는지 확인
      this.head = node; // 큐가 비어 있으면 head와 tail을 새 노드로 설정
    } else { // 큐가 비어 있지 않은 경우
      this.tail.next = node; // 현재 tail 노드의 next를 새 노드로 설정
    }
    this.tail = node; // tail을 새 노드로 업데이트
    this.length += 1; // 큐의 길이를 1 증가
  }

  pop() {
    if (this.empty() === 1) return -1
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (!this.head) {
      this.tail = null;
    }
    return popItem.data
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length === 0 ? 1 : 0
  }

  front() {
    return this.empty() === 1 ? -1 : this.head.data
  }

  back() {
    return this.empty() === 1 ? -1 : this.tail.data
  }
}

function solution(n, testCases) {
  let answer = [];
  const queue = new Queue();

  for (let i = 0; i < n; i++) {
    const command = testCases[i].trim().split(' ')[0];
    switch (command) {
      case 'push':
        const pushData = testCases[i].split(' ')[1]
        queue.push(pushData);
        break;
      case 'pop':
        answer.push(queue.pop());
        break;
      case 'size':
        answer.push(queue.size());
        break;
      case 'empty':
        answer.push(queue.empty());
        break;
      case 'front':
        answer.push(queue.front());
        break;
      case 'back':
        answer.push(queue.back());
        break;
      default:
        break;
    }
  }
  return answer.join('\n');
}

const result = solution(n, testCases);
console.log(result)

