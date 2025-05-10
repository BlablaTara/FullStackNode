import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb+srv://taraaamo:<password>@cluster0.ufb3htn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

await client.connect();

const db = await client.db(dbName)

export default {
    disciplines: db.collection("disciplines"),
    places: db.collection("places")
};