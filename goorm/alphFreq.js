// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(str) {
  for (let charCode = 97; charCode < 123; charCode++) {
    // console.log(String.fromCharCode(charCode));
    const re = new RegExp(`${String.fromCharCode(charCode)}`, "gi");
    console.log(
      `${String.fromCharCode(charCode)} : ${
        str.match(re) ? str.match(re).length : 0
      }`
    );
  }
}

rl.on("line", function (line) {
  solution(line);
  rl.close();
}).on("close", function () {
  process.exit();
});
