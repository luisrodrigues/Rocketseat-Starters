/*
//import * as functions from "./functions";
// import addFunction from "./add";

console.log(functions.add(1, 7));
console.log(functions.sub(4, 2));
console.log(functions.mult(4, 2));

// challenge
import User, { age as userAge } from "./functions";

User.info();
console.log(userAge);

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

// Axios
import axios from "axios";

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response.data);
    } catch (err) {
      console.warn(err);
    }
  }
}

const findUser = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log(response.data);
  } catch (err) {
    console.warn(err);
  }
};

Api.getUserInfo("luisrodrigues");
findUser("luisrodrigues");

// Challenge
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
const onePerSecond = async () => {
  await delay();
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("3s");
};
onePerSecond();

class Github {
  static async getRepos(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      response.data.map((item) => console.log(item.name));
    } catch (err) {
      console.warn(err);
    }
  }
}

Github.getRepos("luisrodrigues");
*/
