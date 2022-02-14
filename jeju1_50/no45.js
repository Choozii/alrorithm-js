let d = new Date();
console.log(d.getTime());
// 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
console.log(Math.floor(d.getTime() / (60 * 60 * 24 * 365 * 1000) + 1970));
