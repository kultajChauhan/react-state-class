function helper(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

function check(arr) {
  return arr.reduce((sum, cur) => sum + cur, 0);
}

export { helper,check };
