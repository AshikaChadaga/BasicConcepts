// console.log("Start!!");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       username: "Ashika"
//     });
//     reject(new Error("Unable to login"));
//   }, 1000);
// });

// promise
//   .then((successful) => {
//     console.log(successful);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// console.log("Done!!");


const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += post.title + ", ";
    });
    console.log("Output: " + output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      }
      else {
        reject("Error: Something went wrong");
      }

    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch(error => console.log(error));

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "GoodBye")
});


Promise.all([promise1, promise2, promise3])
  .then(((values) => console.log(values)));