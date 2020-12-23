// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(scoreArr, n) {
  const result = scoreArr.reduce((total, score) => {
    return (total = total + parseInt(score));
  }, 0);
  const average = parseFloat(result / n).toFixed(2);
  let grade = "F";
  if (average >= 60) {
    grade = "D";
  }
  if (average >= 70) {
    grade = "C";
  }
  if (average >= 80) {
    grade = "B";
  }
  if (average >= 90) {
    grade = "A";
  }
  console.log(`${average} ${grade}`);
}

rl.on("line", function (line) {
  const scoreArr = line.split(" ");
  solution(scoreArr, scoreArr.length);
  rl.close();
}).on("close", function () {
  process.exit();
});
