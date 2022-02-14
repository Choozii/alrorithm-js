- 새롭게 배운 것들
  - split
  - const reverseString = n.split('').reverse().join('');
    - reverse() : 배열의 순서 반전
    - join() : 배열의 모든 요소를 연결해 하나의 문자열로 반환. paramter로 들어가는 값이 구분자가 된다.
    - Math.floor() : 주어진 수자와 같거나 작은 정수 중에서 가장 큰 수를 반환
  - Array method
    - array1.includes('sth') : 배열이 특정 요소를 포함하고 있는지 판별합니다.
    - array1.slice(begin ,end) : slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
    - array1.reduce(callbackF, [initialValue]) - example) const findMaxValue = () => {
      return Object.keys(voteResult).reduce((a, b) => (voteResult[a] > voteResult[b] ? a : b));
      };
