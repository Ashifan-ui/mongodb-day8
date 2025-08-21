// mongoTest.js
const { MongoClient } = require("mongodb");

// Replace with your local or Atlas connection string
const uri = "mongodb://localhost:27017"; // local MongoDB
// Example for Atlas: "mongodb+srv://<username>:<password>@cluster0.mongodb.net/"

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("✅ Connected to MongoDB");

    // Select DB and Collection
    const db = client.db("fullstackDB");
    const books = db.collection("books");

    // Insert a document
    const newBook = { title: "React Guide", author: "Admin" };
    const insertResult = await books.insertOne(newBook);
    console.log("📚 Document inserted with _id:", insertResult.insertedId);

    // Fetch the document
    const book = await books.findOne({ title: "React Guide" });
    console.log("📖 Found book:", book);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed");
  }
}

run();