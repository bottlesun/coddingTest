/* 종이자르기

문제 설명
* 머쓱이는 큰 종이를 1 x 1 크기 로 자르려고 합니다.
* 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
* 정수 M, N이 매개변수로 주어질 때,
* M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

제한사항

* 0 < M, N < 100
* 종이를 겹쳐서 자를 수 없습니다.


* M	  N 	result
* 2	  2 	3
* 2	  5 	9
* 1	  1 	0

* url - https://school.programmers.co.kr/learn/courses/30/lessons/120922
*/

function solution(M, N) {
  console.log((M * N) - 1)
  return (M * N) - 1;
}

solution(1, 1)