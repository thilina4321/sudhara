const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const customer = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    const verifiedToken = await jwt.verify(token, process.env.SECURE);
    const user = await User.findOne({
      _id: verifiedToken.id,
    });

    if(!user){
      throw new Error('No access')
    }

    if(user.role != 'CUSTOMER'){
        throw new Error('Access not allowed')
    }

    req.user_id = user._id
    next();

  } catch (err) {
    res.status(422).send({error:err.message})
  }
};

module.exports = customer;