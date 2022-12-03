/* 문자열 정렬(2)

문제 설명
* 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
* my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.


제한사항
* 0 < my_string 길이 < 100


* my_string	  result
* "Bcad"	    "abcd"
* "heLLo"	    "ehllo"
* "Python"	  "hnopty"

* url - https://school.programmers.co.kr/learn/courses/30/lessons/120912
*/


const stringSort = (str) => {

 return  str.toLowerCase().split('').sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  }).join('');
}
