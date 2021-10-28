console.log("start");

function login(username, password) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log("User has Logged in Successfully");
      resolve({
        username: username,
        password: password
      });
      reject(new Error("Error while Logging in"));
    }, 2000);
  })
}

function buyTickets(username) {
  console.log("Buying Tickets......");
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log(username);
      resolve(["Avengers", "Avataar", "Futari no Hero"]);
      reject(new Error("Error while Booking Tickets"));
    }, 5000);
  })
}

function buySnacks(movies) {
  console.log("Buying Snacks......");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(movies);
      resolve(["Popcorn", "Coke", "Fries", "Pepsi"]);
      reject(new Error("Error while Buying Snacks"));
    }, 6000);
  })
}

async function displayDetails(){
  try{
    const user = await login("ashikachadaga", "987654321");
    const movies = await buyTickets(user);
    console.log("Tickets Bought");
    const snacks = await buySnacks(movies);
    console.log("Snacks Bought");
    console.log(snacks);
  }
  catch(error){
    console.log("Error Caught: " + error);
  }
}

displayDetails();

console.log("Done!");