const timeTable = ['12:30', '13:20', '14:13'];
const presentTime = '12:40';
const ans = [];

const transferToMin = time => {
  return time
    .split(':')
    .map((el, idx) => (idx == 0 ? parseInt(el) * 60 : parseInt(el)))
    .reduce((prev, cur) => prev + cur, 0);
};
const makeTimeFormat = time => {
  const hour = Math.floor(time / 60)
    .toString()
    .padStart(2, 0);
  const min = time % 60;
  return `${hour}시간 ${min}분`;
};
const compareTime = (standard, compare) => {
  const standardTime = transferToMin(standard);
  const compareTime = transferToMin(compare);

  if (standardTime > compareTime) {
    return -1;
  } else {
    return compareTime - standardTime;
  }
};
for (let i in timeTable) {
  let compareResult = compareTime(presentTime, timeTable[i]);
  ans.push(compareResult === -1 ? '지나갔습니다' : makeTimeFormat(compareResult));
}
console.log(ans);
