import mongoose from "mongoose";
export async function connectToDB() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully connected to db");
  } catch (e) {
    console.log("ERROR---->>>", e);
    console.log("Connection to db failed!!", error);
  }
}
