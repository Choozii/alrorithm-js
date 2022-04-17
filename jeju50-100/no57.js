let count = 0;
for (let i = 0; i < 1001; i++) {
  if (i.toString().includes('1')) {
    count++;
  }
}

console.log(count);
