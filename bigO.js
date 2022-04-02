//first try
const sumUpto = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  console.log(total);
};
sumUpto(10);

//second try
const sumUpto1 = (n) => {
  console.log((n * (n + 1)) / 2);
};
sumUpto1(10);
