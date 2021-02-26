const  User  = require("../models/UserModel");

exports.registerUser = async (req, res) => {
    try {
        
        const user = new User(req.body);
        await user.save()

        return res.status(200).json({
            success: true,
            message: "Successfully Signed Up!"
        });
    } catch (error) {
        return res.status(422).json({
            success: false,
            message: "Please enter unique email & username!",
            data: error
        });
    }
};

exports.loginUser = async(req, res) => {
    const userData = req.body
    try {
        const { user, error } = await User.loginWithEmailAndPassword(
            userData
          );
          if (error) {
            return res.status(500).send({ error });
          }
          const { token, error: tokenError } = await user.generateToken();
          if (tokenError) {
            return res.status(500).send({ error: tokenError });
          }
          res.send({ user: user, token });
        res.send()
    } catch (error) {
        res.status(500).send({error:error.message})
    }
};



exports.getUserDetails= (req, res) => {
    res.json({status: true, message: "User Received!", data: req.user});
};
