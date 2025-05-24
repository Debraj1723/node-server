require("dotenv").config();
const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://" +
  process.env.MONGO_ACCESS_USERNAME +
  ":" +
  process.env.MONGO_ACCESS_PASSWORD +
  "@namastenode.og4ndjv.mongodb.net/";

const client = new MongoClient(url);

//Database Name
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  // Insert
  await collection.insertMany([
    {
      firstName: "Aisha",
      lastName: "Khan",
      ageInYears: 29,
      gender: "Female",
    },
    {
      firstName: "Ravi",
      lastName: "Sharma",
      ageInYears: 31,
      gender: "Male",
    },
  ]);

  // find results
  const findResult = await collection.find({}).toArray();
  console.log(findResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
