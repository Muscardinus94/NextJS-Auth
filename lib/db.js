import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://test:NkNsSoFcvJw4NBhD@cluster0.audfe.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
