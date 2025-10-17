import mongoose from "mongoose";

//schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    immutable: [true, "cannot change the value"],
    lowercase: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: [true, "First Name required!"],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name required!"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  profilePicture: {
    url: {
      type: String,
      trim: true,
    },
    public_id: {
      type: String,
      trim: true,
    },
  },
  friends:
  {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

//index creation
userSchema.index({
  firstName: "text",
  middleName: "text",
  lastName: "text",
  username: "text"
})
//model
const model = mongoose.model("User", userSchema);

export default model;
