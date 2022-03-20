import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { required: true, type: String },
  password: { required: true, type: String },
  name: { required: true, type: String },
  location: { type: String },
  email: { required: true, type: String },
});

const User = mongoose.model("User", userSchema);
export default User;
