var promise = new Promise((res, rej) => res(1))

promise
  .then((val) => {++val; return val;})
  .then((val) => {++val; return val;})
  .then((val) => {console.log(++val); return val;})
