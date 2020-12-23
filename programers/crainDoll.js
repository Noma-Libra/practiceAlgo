function solution(board, moves) {
    let answer = 0;
    let basket = [];
    // 계산하기 쉽게 열과 행을 회전시킨다.
    // 앞의 map은 2차원 배열의 index 값이 필요했으며, 사실상 회전은 뒤에 MAP에 작동
    // 0 값은 사실상 필요하기 때문에 filter로 삭제
    const rotateBoard = board[0].map((_,index) => board.map(row => row[index]).filter(doll => doll !== 0).reverse());

    moves.forEach(element => {
        
    });
    
    console.log(answer);
    return answer;
}

solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]);