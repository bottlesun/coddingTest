/** 안전지대

 * 문제 설명
 * 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
 *
 * 00xxx00
 * 00x1x00
 * 00xxx00
 *
 * 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
 * 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

 * 제한사항
 * board는 n * n 배열입니다.
 * 1 ≤ n ≤ 100
 * 지뢰는 1로 표시되어 있습니다.
 * board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

 * board                                                                                                                     result
 * [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]                                     16
 * [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]                                     13
 * [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]  0
 *
 *
 * url - https://school.programmers.co.kr/learn/courses/30/lessons/120866
 */


const solution = (board) => {
  let answer = 0;

  for (let i = 0 ; i < board.length ; i ++) {
    for (let j = 0 ; j < board[i].length ; j ++) {
      if (board[i][j] === 1) {
        if(i !== 0 && board[i-1][j] !== 1)  board[i-1][j] = 2;
        if(i !== board.length-1 && board[i+1][j] !== 1)  board[i+1][j] = 2;
        if(j !== 0 && board[i][j-1] !== 1) board[i][j-1] = 2;
        if(j !== 0 && board[i][j+1] !== 1) board[i][j+1] = 2;
        if(i !== 0 && j !== 0 && board[i-1][j-1] !== 1) board[i-1][j-1] = 2;
        if(i !== board.length-1 && j !== board[i].length-1 && board[i+1][j+1] !== 1) board[i+1][j+1] = 2;
        if(i !== board.length-1 && j !== 0 && board[i+1][j-1] !== 1) board[i+1][j-1] = 2;
        if(i !== 0 && j !== board[i].length-1 && board[i-1][j+1] !== 1) board[i-1][j+1] = 2;
      }
    }
  }
  board.map((item) => item.filter((b) => b === 0 ? answer ++ :  0));

  return answer;
}

solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]);
/**
 1 기준 위 3 아래 3 양 옆
 b[3] = 1

 a[2,3,4]
 b[2,3,4]
 d[2,3,4]

 import numpy as np
 def solution(board):
 board = np.array(board)
 rows, cols = np.where(board == 1)
 for r, c in zip(rows, cols):
 board[r-1:r+2, c-1:c+2] = 1
 return len(board[board==0])

 */