// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(array, cycle) {
  for (let idx = 1; idx <= cycle; idx++) {
    for (let j = 0; j < idx; j++) {
      if (array[idx] < array[j]) {
        [array[idx], array[j]] = [array[j], array[idx]];
      }
    }
  }
  return array.join(" ");
}
let input = [];
rl.prompt();
rl.on("line", (line) => {
  input.push(line);
  if (input.length > 2) {
    const arrLen = input[0];
    const array = input[1].split(" ");
    const cycle = input[2];

    if (parseInt(arrLen) !== array.length) {
      console.log(
        `입력한 배열의 길이 : ${arrLen} 와 선언한 배열의 길이가 : ${array.length} 가 일치하지 않습니다.`
      );
      rl.close();
    }
    console.log(solution(array, cycle) + " ");
    rl.close();
  }
}).on("close", function () {
  process.exit();
});
