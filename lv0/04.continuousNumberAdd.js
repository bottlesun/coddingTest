/* 연속된 수의 합

문제 설명
* 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
* 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때,
* 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

제한사항
* 1 ≤ num ≤ 100
* 0 ≤ total ≤ 1000
* num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

* url - https://school.programmers.co.kr/learn/courses/30/lessons/120923
*/


function solution(num, total) {
  let acc = 0;

// reduce => 배열의 요소들을 하나의 결과 값을 반환합니다.
// map => 배열의 각 원소 별로 지정된 함수를 실행한 결과로 구성된 새로운 배열을 반환
// fill => 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.

// 임의의 배열을 num 수만큼 생성 0으로 다 초기화
// mapping 한 index 번호를 전부 합한다
  let addArr = new Array(num).fill(0).map((v, i) => i).reduce((a, b) => a + b);

  while (addArr !== total) { // total 값이랑 addArr 값이 같을때 까지 반복
    if (addArr < total) { // addArr 가 total 보다 작다면
      acc++
    } else {
      acc--
    }
    addArr = new Array(num).fill(0).map((v, i) => i + acc).reduce((a, b) => a + b); // 도출된 a 값에 i 값을 더하여 총 합을 도출
  }

  return new Array(num).fill(0).map((v, i) => i + acc)
}