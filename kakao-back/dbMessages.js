import mongoose from "mongoose";

const { Schema } = mongoose;

const message = new Schema({
  message: String,
  name: String,
  timeStamp: String,
});

export default mongoose.model("messagecontents", message);
