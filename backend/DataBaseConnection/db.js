import mongoose from 'mongoose';
const connection = async (req, res) => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDb connected !! DB Host ${response.connection.host}`)

    } catch (error) {
        console.log("Mongo Db connection Error: "+error);
        process.exit(1);
    }
}
export default connection;