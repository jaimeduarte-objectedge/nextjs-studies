import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = MongoClient.connect(
    "mongodb+srv://sapo_db_user:WdkdtSw8SIXOYpW6@cluster0.u0nhg3n.mongodb.net/?retryWrites=true&w=majority"
  );
  return client;
}
