var promise = new Promise((res, rej) => res(1))

promise
  .then((val) => {
    ++val;
    return val;
  })
  .then((val) => {
    ++val;
    return val;
  })
  .then((val) => {
    console.log(++val);
    return val;
  })

function* fib() {
  var a = yield 1;
  yield a * 2;
}

var it = fib();
var value = it.next().value

const promises = []

