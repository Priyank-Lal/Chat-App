import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to Database");
  } catch (error) {
    console.log("Error occured while connecting to DB: ", error);
  }
};

export default connectToDatabase;
