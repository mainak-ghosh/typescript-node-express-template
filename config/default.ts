import * as dotenv from "dotenv";
dotenv.config({ path: '.dev.env' });

export default {
    host: process.env.HOST,             // Host adderess
    port: process.env.PORT,             // Port number
    dbUri: process.env.PORT,            // Insert Database url
};