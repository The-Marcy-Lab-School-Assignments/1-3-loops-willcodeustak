const brokenLoop = (start, end) => {
  let result = "";
  for (let i = start; i <= end; i += 1) {
    result += i;
  }
  return result;
};

const brokenNested = () => {
  let result = "";
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      result += `-${i}${j}`;
    }
  }
  return result.slice(1);
};
console.log(brokenNested());

module.exports = {
  brokenLoop,
  brokenNested,
};
