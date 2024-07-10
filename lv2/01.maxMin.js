/** 최댓값과 최소값

* 문제 설명
* 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
* str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
* 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

* 제한사항
* s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.


* 입출력 예
* s	            return
"1 2 3 4"	      "1 4"
"-1 -2 -3 -4"	  "-4 -1"
"-1 -1"	        "-1 -1"
*
*
* url - https://school.programmers.co.kr/learn/courses/30/lessons/12939
*/

function solution(s) {
  let arr = s.split(" ").map(Number).sort((a , b) => a - b)
  console.log(arr[0] + " " + arr[arr.length - 1]);
  // if(arr.include('-')) return arr[arr.length - 1]  + " " + arr[0]
  return arr[0] + " " + arr[arr.length - 1];
}

solution("1 2 3 4");
