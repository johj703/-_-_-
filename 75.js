// 코딩테스트 연습 - 연습 문제 - 최댓값과 최솟값
function solution(s) {
    // 1. 문자열을 공백으로 나누어서 배열로 반환
    const numbers = s.split(' ');

    // 2. 숫자 배열을 순회하면서 최솟값과 최댓값 찾기
    let min = Number(numbers[0]);
    let max = Number(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {
        const num = Number(numbers[i]);
        if (num < min) {
            min = num; // 새로운 최솟값 발견
        }
        if (num > max) {
            max = num; // 새로운 최댓값 발견
        }
    }

    // 최솟값과 최댓값을 문자열로 합쳐서 반환
    return `${min} ${max}`;
}