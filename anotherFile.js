const coolFunction = n => {
  if (n === 0) return;
  console.log(n);
  coolFunction(n - 1);
}
