/** 분수의 덧셈

 * 문제 설명
 * 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1,
 * 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다.
 * 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

 * 제한사항
 * 0 <denum1, num1, denum2, num2 < 1,000

 * denum1  num1  denum2  num2  result
 * 1       2     3       4    [5, 4]
 * 9       2     1       3    [29, 6]
 *
 *
 * url - https://school.programmers.co.kr/learn/courses/30/lessons/120808
 */


function solution(denum1, num1, denum2, num2) {
  let a = [];
  let denominator = num1 * denum2 + num2 * denum1;
  let numerator = num1 * num2

  // 최대 공약수 활용
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  let min = gcd(denominator, numerator);

  a.push(denominator/min)
  a.push(numerator/min)

  return  a
}

solution(9, 2, 1, 3)