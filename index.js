const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({name: "Tony"})
.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

// User.findByIdAndDelete("69fe27ab8e96f5be42aed589")
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.deleteMany({age: 48})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });



// User.findByIdAndUpdate("69fe27ab8e96f5be42aed589", {age: 38}, {new: true})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.findOneAndUpdate({name: "Bruce"}, {age: 42}, {new: true})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.updateMany({age: {$gt: 48}}, {age: 55})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// User.findById("69ff4434c545ecbb6a506dee")
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 50},
//   {name: "Peter", email: "peter@gmail.com", age: 30},
//   {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//   console.log(res);
// });

// const user2 = new User({
//   name: "Eve",
//   email: "eve@yahoo.in",
//   age: 48,
// });

// user2
// .save()
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });