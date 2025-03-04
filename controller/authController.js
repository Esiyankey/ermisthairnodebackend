const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../db/models/user");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWTSECRETKEY, {
    expiresIn: process.env.JWTEXPIRESIN,
  });
};
const signup = catchAsync(async (req, res, next) => {
  const body = req.body;

  const newUser = await user.create({
    userType: "1",
    userName: body.userName,
    email: body.email,
    password: body.password,
    confirmPassword: body.confirmPassword,
  });

  const result = newUser.toJSON();
  delete result.password;
  delete result.deletedAt;

  result.token = generateToken({
    id: result.id,
  });

  if (!newUser) {
    return next(new AppError("User not found", 400));
  }

  return res.status(201).json({
    status: "success",
    data: result,
  });
});

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("please provide email and password", 400));
  }

  const result = await user.findOne({ where: { email } });
  const isPasswordMatch = await bcrypt.compare(password, result.password);
  if (!result || !isPasswordMatch) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const token = generateToken({
    id: result.id,
  });
  return res.json({
    status: "success",
    token,
  });
};

const authentication = catchAsync(async (req, res, next) => {
  let idToken = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    idToken = req.headers.authorization.split("")[1];
  }

  if (idToken) {
    return next(new AppError("Pleae login to get access", 401));
  }

  const tokenDetail = jwt.verify(idToken, process.env.JWTSECRETKEY);

  const freshUser = user.findByPk(tokenDetail.id);
  if (!freshUser) {
    return next(new AppError("User no longer exist", 400));
  }
  req.user = freshUser;
  return next();
});

module.exports = { signup, login, authentication };
