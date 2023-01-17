// JavaScript engine is single threaded and has a synchronous execution model.
// Single threaded means that one command is being executed at a time.
// Synchronous means one at a time i.e. one line of code is being executed at time in order the code appears.
// So when in JavaScript engine, one thing is happening at a time from top to bottom.

// This is why we need Asynchronous nature so that code does not block.
// We know in practice that JavaScript inside the browser is doing multiple things at the same time.
// JavaScript Engine is normally embedded in bigger system (browser or node.js).
// This BIGGER system provides multiple different features (web apis, event queues, setTimeOut, etc)
// So while when JS Engin is processing its code and it detects events that could happen later,
// it sends them to the event loop (queue) and the engine keeps reads the code from the top to bottom without blocking.

// This allows Asyncrhonous nature in JS world.

// There are three main ways that one can do to simulate asynchronous nature of JS.

// 1. Callback, 2. Promise (.then),  3. Async/Await

// 1. Callback function example:

const loginUser = (email, password, callback) => {
  setTimeout(() => {
    callback({ token: "jiwqksdal21sad2gvx" });
  }, 3000);
};

const getPosts = (token, callback) => {
  setTimeout(() => {
    callback(["post1", "post2", "post3"]);
  }, 2000);
};

const user = loginUser("hjun1114@gmail.com", "sadasdas", (token) => {
  console.log(token);
  getPosts(token, (videos) => {
    videos.forEach((video) => {
      console.log(video);
    });
  });
});

// this quickly gets messy after 2 level of callback functions.
window.addEventListener("load", () => {
  document.getElementById("button").addEventListener("click", () => {
    setTimeout(() => {
      items.forEach((item) => {
        console.log("callback hell begins");
      });
    }, 2000);
  });
});

// 2. Promise(s)

// A promise is commonly defined as a proxy for a value that will eventually become available.

// Promises are objects that represent IDEA. A promise object represents "future value"
// A value that we know we are going to eventually get, but we may not have yet.

// One can think of it as a receipt - although you haven't received the actual value, the receipt holds it as a proof
// and it holds a value of the actual product.
// Promises are one way to deal with asynchronous code, without getting stuck in callback hell.

// Promise object needs to get an executor function as a parameter.
// Executor function means the function that will actually execute some work;
// that is, an logic or request function that will get data from the server, or run a setTimeOut.

// The promise object in essensce does not do any of the work of actually requesting the data.
// The promise object wraps of the idea of "waiting" for that work to complete, then figure out
// what to do after you get the result / or get rejected by the server.

// there are three states in promise object 1.PENDING, 2.RESOLVED, 3.REJECTED

// Example:

let done = true;
// promise object takes executor function that actually get data from the server.
// resolve simply gets the value from the executor function and return it.
// after resolve, pending state changes to resolved or rejected.

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "Here is the thing I built";
    resolve(workDone);
  } else {
    const why = "Still working on something else";
    reject(why);
  }
});

// Consuming Promise
const checkIfItsDone = () => {
  isItDoneYet
    .then((ok) => {
      console.log(ok);
      // if it also takes time, this function goes in to a list of handler functions.
    })
    .catch((err) => {
      // if it also takes time, this function goes in to a list of catch functions.
    });
};

checkIfItsDone();

// fetch () function is based on promise.
// It returns a promise that resolves into a Response object.

// Simple fetch get request:
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  //To read the response body, we have to call a response method on it, like text() or json()
  // which will return another promise whose resolve value is the body of the response.
  .then((data) => console.log(data));

// Example of POST request using fetch:
fetch("https://example.com/profile", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// 3. Async / Await syntax

// Most modern, cleanest and emerging syntax to deal with asynchronous JS.
// Async functions are a combination of promises and generators
// In essence, they are a higher level abstraction over promises.
// Let me repeat: async/await is built on promises.

// Why were async/await introduced?
// The promise indeed solved the issue of callback hells, but it did have its own problem:
// -> the .then() chain. The promise still has "chainy" syntax and
// the async/await reduce the boilerplate around promises, limitation of chaining promises.

// They make the code look like it's synchronous, but it's asynchronous and non-blocking behind the scenes.

// COMPARING fetch WITH aysnc/wait function:
const getFirstUserDataByFetch = () => {
  return fetch("/users.json") // get users list
    .then((response) => response.json()) // parse JSON
    .then((users) => users[0]) // pick first user
    .then((user) => fetch(`/users/${user.name}`)) // get user data
    .then((userResponse) => userResponse.json()); // parse JSON
};

getFirstUserDataByFetch();

const getFirstUserDataByAsync = async () => {
  const response = await fetch("/users.json"); // get users list
  const users = await response.json(); // parse JSON
  const user = users[0]; // pick first user
  const userResponse = await fetch(`/users/${user.name}`); // get user data
  const userData = await userResponse.json(); // parse JSON
  return userData;
};

getFirstUserDataByAsync();

//ANOTHER EXAMPLE:

const showAvatar = async () => {
  // read our JSON
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
};

showAvatar();

// testing 123