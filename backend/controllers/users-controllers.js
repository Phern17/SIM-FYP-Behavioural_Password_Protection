const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUsers = async (req, res, next) => {
  let users;
  try{
  users = await User.find({}, '-password');
  }catch(err)
  {
    const error = new HttpError(
      "Fetching users failed, please try again later.", 500
    )
    return next(error);
  }

  res.json({users: users.map(user => user.toObject({getters: true}))})
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { name, email, password } = req.body;

  let existingUser;
  try{
    existingUser = await User.findOne({name: name})
  }catch(err){
    const error = new HttpError(
      'Signing up failed, plese try again later.',
      500
    )
    return next(error);
  }


  if(exisitingUser) {
    const error = new HttpError(
      'User exists already, please choose another username instead.',
      422
    )
    return next(error);
  }

  let existingUserEmail;

  try{
    existingUserEmail = await User.findOne({email: email})
  }catch(err){
    const error = new HttpError(
      'Signing up failed, plese try again later.',
      500
    )
    return next(error);
  }

  if(exisitingUserEmail) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422
    )
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Creating user failed", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try{
    existingUser = await User.findOne({email: email})
  }catch(err){
    const error = new HttpError(
      'Loggin in failed, plese try again later.',
      500
    )
    return next(error);
  }

  if(!existingUser || existingUser.password != password){
    const error = new HttpError(
      'Invalid credentials, please re-enter credentials',
      401
    )

    return next(error);
  }

  res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
