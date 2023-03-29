import mongoose from "mongoose";

const connectDatabase = () => {
    mongoose
        .connect(process.env.LOCAL_DB_URL as string)
        .then((res) => {
            console.log(`connected to data base: ${res.connection.host}`);
        })
        .catch((error) => {
            console.log(error)
        });
};
export default connectDatabase;
