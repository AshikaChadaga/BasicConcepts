console.log("Start...");

function login(username, password, callback){
  setTimeout(() => {
    console.log("User has Logged in Successfully");
    callback({
      username: username,
      password: password
    });
  }, 2000);
}

function buyTickets(username, callback){
  console.log("Buying Tickets......");
  setTimeout(() => {    
    callback(["Avengers", "Avataar", "Futari no Hero"]);
  }, 5000);
}

function buySnacks(username, callback){
  console.log("Buying Snacks......");
  setTimeout(() => {
    callback(["Popcorn", "Coke", "Fries", "Pepsi"]);
  }, 6000);
}

const customer = login("ashikachadaga", "987654321", (getData) => {
  console.log(getData);
  buyTickets(getData.username, (getMovies) => {
    console.log("The list of movies available: " + getMovies);
    buySnacks(getData, (getSnacks) => {
      console.log("The snacks available are : " + getSnacks);
    });
  });
});

console.log("Done!!");

//unreadable, debugging is tough if one callback fails, 

// const posts = [
//   {  title: "Post One", body: "This is post one"},
//   {  title: "Post Two", body: "This is post two"}
// ];

// function getPosts(){
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += post.title + ", ";
//     });
//     console.log("Output: " + output);
//   }, 1000);
// }

// function createPost(post, callback){
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: "Post Three", body: "This is post Three"}, getPosts);