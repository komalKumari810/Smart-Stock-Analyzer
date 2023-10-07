import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-kkcrtx8-shard-00-00.li9gunc.mongodb.net:27017,ac-kkcrtx8-shard-00-01.li9gunc.mongodb.net:27017,ac-kkcrtx8-shard-00-02.li9gunc.mongodb.net:27017/SMART-STOCK-ANALYZER?ssl=true&replicaSet=atlas-coxvut-shard-0&authSource=admin&retryWrites=true&w=majority`;
     try {
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
       console.log('Database connected sueccessfully');
     } catch (error) {
        console.log("Error while connecting with the database", error.message);
     }
}

export default Connection;