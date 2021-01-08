function check(number) {
  let front = [];
  let back = [];
  const numLen = number.toString().length;

  if (numLen % 2 === 0) {
    // 2 * n 자리수 일 때
    for (let idx = 0; idx < numLen; idx++) {
      if (idx < numLen / 2) {
        front.push(number.toString().charAt(idx));
      } else {
        back.push(number.toString().charAt(idx));
      }
    }
    const front_value = front.reduce((sum, value) => {
      return sum * value;
    }, 1);
    const back_value = back.reduce((sum, value) => {
      return sum * value;
    }, 1);
    console.log(front_value, back_value);
    if (front_value === back_value) {
      return true;
    }
  }
  // 2 * n 자리수가 아닐 때
  return false;
}

function solution(num) {
  while (!check(num)) {
    num++;
  }
  return num;
  // 자릿수가 2의 배수일 때, 전체 자릿수에서 반을 나눠 앞에 숫자들과 뒤에 숫자들의 곱의 값이 같아야 한다.
  // 자릿수를 나누어 앞 부분과 뒷 부분으로 분할
}
console.log(solution(49999900));
