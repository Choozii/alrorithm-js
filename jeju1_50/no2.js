var arr = [200, 100, 300];
//2번째 인덱스 자리에 10000을 삽입해야한다.
arr.splice(2, 0, 10000);
console.log(arr);

//출력
//[200, 100, 10000, 300]
