

function p1(bool) {
  return new Promise((resolve, reject) => {
    // console.log('inside promise');
    bool ? resolve(true) : reject(new Error());
  });
}

function runPromise() {
  p1(true)
    .then(p1)
    .then(p1)
    .catch(console.error);
}

console.time('t1');
for (let i = 0; i < 1e4; i++) {
  runPromise();
}
console.timeEnd('t1');
