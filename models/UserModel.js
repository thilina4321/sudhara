const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const UserRole = require('../enums/UserRole')

var UserSchema = new Schema({
  name: {
      type: String,
      required: [true, 'Name field is required!'],
      maxlength: 100
  },
  email: {
      type: String,
      required: [true, 'Email field is required!'],
      unique: true
  },
  username: {
      type: String,
      required: [true, 'Username field is required!'],
      unique: true
  },
  password: {
      type: String,
      minlength: 8,
      required: [true, 'Password field is required!'],
  },
  role: {
      type: String,
      enum: UserRole,
      default: UserRole.CUSTOMER
  },
  
  phone_number: {
      type: String,
      required: true
  },
  Created_date: {
      type: Date,
      default: Date.now
  }
});


UserSchema.statics.loginWithEmailAndPassword = async (credential) => {
  try {
    const user = await User.findOne({ email: credential.email });
    if (!user) {
      throw new Error("Loging Error");
    }

    
    if (user.password != credential.password) {
      throw new Error("Password is not matched");
    }

    return { user };
  } catch (error) {
    return { error: error.message };
  }
};

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.tokens;
  delete userObject.password;

  return userObject;
};

UserSchema.methods.generateToken = async function () {
  const user = this;

  try {
    const token = jwt.sign({ id: user._id }, process.env.SECURE, {
      expiresIn: "1h",
    });
    await user.save();
    return { token };
  } catch (error) {
    return { error: error.message };
  }
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
