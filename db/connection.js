// const { MongoClient } = require('mongodb');

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = 'mongodb+srv://#:<#>@cluster0.eqaabez.mongodb.net/?appName=Cluster0';
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
 
// const mongodb = require('mongodb');

// const URI = 'mongodb+srv://#:<#>@cluster0.eqaabez.mongodb.net/?appName=Cluster0';

// const connectDB = async () => {
//     await mongodb.MongoClient.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
// };

// module.exports = connectDB;

import { MongoClient } from 'mongodb';

const URI = 'mongodb+srv://#:<#>@cluster0.eqaabez.mongodb.net/';

const client = new MongoClient(URI);

const dbName = '#'; // replace with your database name

async function main () {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected successfully to MongoDB');
    } catch (error) {
        console.error(error);
    }
}

main();