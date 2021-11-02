// process.stdout.write('\x07');
const imput = process.argv.splice(2);

const numberArr = [];

for (const val of imput) {
  numberArr.push(Number(val));
}

numberArr.sort(function(a, b) {
  return a - b;
});

if (numberArr.length > 0) {
  for (const val of numberArr) {
    if (Number.isInteger(val) && val > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
        console.log(val);
      }, val * 1000);
    }
  }
}