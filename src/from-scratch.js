const loop0UpTo10 = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};

const loop5to10 = () => {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
};

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10; i += 2) {
    console.log(i);
  }
};

const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }
};

const loopUpToNum = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
};

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`fizzbuzz`);
    } else if (i % 3 === 0) {
      console.log(`fizz`);
    } else if (i % 5 === 0) {
      console.log(`buzz`);
    } else {
      console.log(i);
    }
};
console.log(fizzbuzz());
//forgot "else" if
//forgot to hoist the && to the top
//forgot to call "fizzbuzzz() at the end"

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
