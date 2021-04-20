const {MongoClient} = require('mongodb');
async function main() {
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
    const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.9klct.mongodb.net/myFirstDatabasetest?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    //await client.connect();
    //await listDatabases(client);
    try {
        await client.connect(); //asynchronous process

        const database= client.db("sample_training");
        const collection= database.collection("posts");
        const res= await collection.find(
          {"date":{"$lt":"2012-11-20T05:05:15.250Z"}}).toArray()
        
        console.log(res)
        //await listDatabases(client);
 
    }   catch (e) {//exception
    console.error(e);
    }
    finally {
    await client.close();
    }
}
main().catch(console.error);
