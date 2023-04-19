import mongoose from "mongoose";
import colors from "colors";

const coneectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to mongoDB Database ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error.message}`.bgRed.white);
  }
};

export default coneectDB;
