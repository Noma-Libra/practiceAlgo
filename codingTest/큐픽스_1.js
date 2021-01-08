function convert(x, dirname) {
  return [dirname[x[0] - 1], dirname[x[1] - 1]];
}

function solution(N, relation, dirname) {
  var answer = 0;
  const graph_obj = relation
    .map((x) => convert(x, dirname))
    .reduce((obj, [key, val]) => {
      obj[key] = obj[key] ? obj[key] : [];
      obj[key].push(val);
      return obj;
    }, {});

  while (path.length !== N) {}

  return answer;
}

console.log(
  solution(
    7,
    [
      [1, 2],
      [2, 5],
      [2, 6],
      [1, 3],
      [1, 4],
      [3, 7],
    ],
    ["root", "abcd", "cs", "hello", "etc", "hello", "solution"]
  )
);
