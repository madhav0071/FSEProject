const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name should be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name should be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be 5 charcters Long"],
  },
  password: {
    type: String,
    required: true,
    select: false, //  because we don't want to return the password when we query the user
  },
  //socket id is to determine the captain location which is the uber driver
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
};

// Method to compare passwords (for login)
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Method to hash the password
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModels = mongoose.model("user", userSchema);

module.exports = userModels;
