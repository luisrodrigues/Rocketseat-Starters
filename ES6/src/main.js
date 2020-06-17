//import * as functions from "./functions";
// import addFunction from "./add";
/*
console.log(functions.add(1, 7));
console.log(functions.sub(4, 2));
console.log(functions.mult(4, 2));

// challenge
import User, { age as userAge } from "./functions";

User.info();
console.log(userAge);
*/
// Async/await
const myPromise = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("OK");
    }, 2000)
  );

// myPromise()
//  .then((response) => console.log(response))
//  .catch((err) => console.warn(err));
const executePromise = async () => {
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
};
// easier than cascade
executePromise();
// above is also a promise
