
import dotenv from 'dotenv';
import app from './app';
// import { connectDatabase } from './config/database';
import connectDatabase from "./config/database"

dotenv.config({ path: './config/config.env' });

connectDatabase();
console.log(process.env.JWT_TOKEN);
// app.get('/', function (req, res) {
//     res.send('Hello there this is cool');
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port} in ${process.env.LOCAL_DB_URL}`);
});

