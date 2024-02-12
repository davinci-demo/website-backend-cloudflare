
const User = require( '../src/models/User' );
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

// generate one record
const genOne = () => {
    const accumulator = [];
    const name = {first: "example", last: "test"};
    email = "example@davincirenaissance.org";
    hash = "ABCDEF123456789";
    stamp = Date.now();
    role = {_id: "507f1f77bcf86cd799439011", name: "instructor"};

    accumulator.push({
      name,
      email,
      hash,
      stamp,
      stamp,
      role,
    });
    return accumulator;
}

const connectDB = async () => {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("connected to db");
    } catch (error) {
      console.error(error);
    }
  };

const sample = genOne();
connectDB();
User.insertMany(sample)
    .then(docs => console.log("insert done"))
    .catch(err => {
      console.error(err);
    });

