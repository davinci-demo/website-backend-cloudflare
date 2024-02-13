
////const MONGODB_URI = process.env.MONGODB_URI;
////db = connect( MONGODB_URI);
db = connect( 'mongodb://DV-TESTER:DV-PASSWORD@localhost:27017/DV-DB');

// generate one record
const accumulator = [];
const name = {first: "example", last: "test"};
const email = "example@davincirenaissance.org";
const hash = "ABCDEF123456789";
const stamp = Date.now();
const role = {name: "instructor"};
accumulator.push({
      name,
      email,
      hash,
      stamp,
      stamp,
      role,
    });

db.user.insertMany( accumulator );

