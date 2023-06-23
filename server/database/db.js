import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-vpaxsp8-shard-00-00.xiekobd.mongodb.net:27017,ac-vpaxsp8-shard-00-01.xiekobd.mongodb.net:27017,ac-vpaxsp8-shard-00-02.xiekobd.mongodb.net:27017/?ssl=true&replicaSet=atlas-13mfcl-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};
 
export default Connection;