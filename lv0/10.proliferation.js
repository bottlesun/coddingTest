/* 세균 증식

* 문제 설명
* 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
* 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

* 제한사항
* 1 ≤ n ≤ 10
* 1 ≤ t ≤ 15

* n  	t	  result
* 2	  10	2048
* 7	  15	229,376

* url - https://school.programmers.co.kr/learn/courses/30/lessons/120910
*/





const solution = (n,t) => {
  let answer = 0;
  for(let i = 0; i <= t ; i ++){
    answer += n
     n = answer
  }
  return answer
}

solution(7,15)