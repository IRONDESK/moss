import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { required: true, type: String, unique: true },
  email: { required: true, type: String, unique: true },
  password: { required: true, type: String },
  name: { required: true, type: String },
  location: { type: String },
});

userSchema.pre("save", async function () {
  console.log("OG:", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("HASHED:", this.password);
});

const User = mongoose.model("User", userSchema);
export default User;
