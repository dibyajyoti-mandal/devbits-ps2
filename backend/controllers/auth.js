import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createError } from "../util/errors.js";
import jwt from "jsonwebtoken";

export const signUpUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({ ...req.body, password: hash })
    await newUser.save();
    console.log(newUser)
    res.status(200).send("user created")
  } catch (err) {
    next(err)
  }
}

export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    const token = jwt.sign({ id: user._id }, "process");
    const { password, ...others } = user._doc;

    res.cookie("access_token", token, {
      httpOnly: true,
      withCredentials:true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
      .status(200)
      .json({token, others});
  } catch (err) {
    next(err);
  }
};
