/** 시소 짝꿍
 *
 * 문제 설명
 *
 * 어느 공원 놀이터에는 시소가 하나 설치되어 있습니다.
 * 이 시소는 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있습니다.
 * 이 시소를 두 명이 마주 보고 탄다고 할 때,
 * 시소가 평형인 상태에서 각각에 의해 시소에 걸리는 토크의 크기가 서로 상쇄되어 완전한 균형을 이룰 수 있다면 그 두 사람을 시소 짝꿍이라고 합니다.
 * 즉, 탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍이라고 할 수 있습니다.
 * 사람들의 몸무게 목록 weights이 주어질 때, 시소 짝꿍이 몇 쌍 존재하는지 구하여 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 2 ≤ weights의 길이 ≤ 100,000
 * 100 ≤ weights[i] ≤ 1,000
 * - 몸무게 단위는 N(뉴턴)으로 주어집니다.
 * - 몸무게는 모두 정수입니다.
 *
 * 입출력 예
 * weights	              result
 * [100,180,360,100,270]	4
 *
 * 입출력 예 설명
 * {100, 100} 은 서로 같은 거리에 마주보고 앉으면 균형을 이룹니다.
 * {180, 360} 은 각각 4(m), 2(m) 거리에 마주보고 앉으면 균형을 이룹니다.
 * {180, 270} 은 각각 3(m), 2(m) 거리에 마주보고 앉으면 균형을 이룹니다.
 * {270, 360} 은 각각 4(m), 3(m) 거리에 마주보고 앉으면 균형을 이룹니다.
 * **/

const solution = (weights) => {
  let result = 0;
  const map = new Map();

  // 각 무게의 개수를 셉니다.
  for (const weight of weights) {
    if (map.has(weight)) {
      map.set(weight, map.get(weight) + 1);
    } else {
      map.set(weight, 1);
    }
  }

  // 각 무게에 대해 균형을 맞출 수 있는 쌍을 찾습니다.
  for (const [weight, count] of map) {
    // 동일한 무게끼리의 쌍
    if (count > 1) {
      result += (count * (count - 1)) / 2;
    }
    // 비율이 2:4인 경우
    if (map.has(weight * 2)) {
      result += count * map.get(weight * 2);
    }
    // 비율이 3:2인 경우
    if (map.has(weight * 3 / 2)) {
      result += count * map.get(weight * 3 / 2);
    }
    // 비율이 4:3인 경우
    if (map.has(weight * 4 / 3)) {
      result += count * map.get(weight * 4 / 3);
    }
  }

  return result;
};

console.log(solution([100, 180, 360, 100, 270])); // 결과는 4
