/* 다음에 올 숫자

문제 설명
* 등차수열 혹은 등비수열 common이 매개변수로 주어질 때,
* 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

제한사항
* 2 < common의 길이 < 1,000
* -1,000 < common의 원소 < 2,000
* 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
* 공비가 0인 경우는 없습니다.


* url - https://school.programmers.co.kr/learn/courses/30/lessons/120924
*/

function solution(common) {
  const num = common[1] - common[0]
  const num2 = common[2] - common[1]
  const lastNum = common.length - 1;

  if (num === num2) return common[lastNum] + num;

  return common[lastNum] * 2
}

solution([2, 4, 8])