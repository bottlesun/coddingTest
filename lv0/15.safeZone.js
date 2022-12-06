/** 안전지대 // 못품

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



function solution(b) {
  const directions = [[0, 0], [0, 1], [0, -1], [1, 1], [1, 0], [1, -1], [-1, -1], [-1, 0], [-1, 1]]
  let bombSet = new Set();

  for (let i = 0; i < b.length; i++) { // x 축
    for (let j = 0; j < b[i].length; j++) { // y 축
      if (b[i][j] === 1) { // 1이 있다면?
        directions.forEach(el => { // 경우에 수 forEach
          let [nextX, nextY] = el;
          [nextX, nextY] = [i + nextX, j + nextY];
          if (nextX >= 0 && nextX < b.length && nextY >= 0 && nextY < b[i].length) {
            bombSet.add(nextX + ' ' + nextY);
          }
        })
      }
    }
  }
  console.log(bombSet)
  return b.length * b[0].length - bombSet.size;
}

solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]);
