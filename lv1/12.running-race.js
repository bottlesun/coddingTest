/**
 * @name runningRace - 달리기 경주
 *
 * 문제 설명
 * 얀에서는 매년 달리기 경주가 열립니다.
 * 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다.
 * 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때,
 * 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다.
 * 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.
 *
 * 선수들의 이름이 1등부터 현재 등수 순서대로
 * 담긴 문자열 배열 players와 해설진이 부른 이름을 담은
 * 문자열 배열 callings가 매개변수로 주어질 때,
 * 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아
 * return 하는 solution 함수를 완성해주세요.
 *
 *
 * 제한사항
 * 5 ≤ players의 길이 ≤ 50,000
 * players[i]는 i번째 선수의 이름을 의미합니다.
 * players의 원소들은 알파벳 소문자로만 이루어져 있습니다.
 * players에는 중복된 값이 들어가 있지 않습니다.
 * 3 ≤ players[i]의 길이 ≤ 10
 * 2 ≤ callings의 길이 ≤ 1,000,000
 * callings는 players의 원소들로만 이루어져 있습니다.
 * 경주 진행중 1등인 선수의 이름은 불리지 않습니다.
 *
 * 입출력 예
 * players	                               callings	                        result
 * ["mumu", "soe", "poe", "kai", "mine"]	["kai", "kai", "mine", "mine"]	["mumu", "kai", "mine", "soe", "poe"]
 *
 * url - https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript
 */

const result = ["mumu", "kai", "mine", "soe", "poe"];


const solution = (players, callings) => {
  // 선수들의 현재 위치를 추적하기 위한 맵을 만듭니다.
  let playerMap = new Map();
  for (let i = 0; i < players.length; i++) {
    playerMap.set(players[i], i);
  }
  for (let call of callings) {
    // 호출된 선수가 현재 위치에서 앞 선수와 위치를 바꾸는 작업을 합니다.
    let index = playerMap.get(call);

    if (index > 0) {
      let prevPlayer = players[index - 1];

      // 선수들의 위치를 배열에서 바꿉니다.
      players[index - 1] = call;
      players[index] = prevPlayer;

      // 선수들의 위치를 맵에서도 업데이트합니다.
      playerMap.set(call, index - 1);
      playerMap.set(prevPlayer, index);
    }
  }

  return players;
};


solution(
  ["mumu", "soe", "poe", "kai", "mine"],
  ["kai", "kai", "mine", "mine"]
);

// result ["mumu", "kai", "mine", "soe", "poe"]

//첫시도
// const solution = (players, callings) => {
//   let answer = players
//   let ones = false;
//
//   callings.map((item) => {
//     if (players.includes(item)) {
//       if (!ones) {
//         let indexId = players.indexOf(item);
//         let changeItem = players[indexId - 1];
//         answer.splice(indexId - 1, 1, item);
//         answer.splice(indexId, 1, changeItem)
//         // answer = players.with(indexId - 1, item);
//         // answer = answer.with(indexId, changeItem);
//         ones = true;
//       } else {
//         let indexId = answer.indexOf(item);
//         let changeItem = answer[indexId - 1];
//
//         // answer = answer.with(indexId - 1, item);
//         // answer = answer.with(indexId, changeItem);
//         answer.splice(indexId - 1, 1, item);
//         answer.splice(indexId, 1, changeItem)
//       }
//     }
//   });
//
//   // console.log('result = ', answer.every(item => result.includes(item)));
//   return answer;
// };
