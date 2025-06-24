import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { CreateUser, GetUserByEmail } from "../../../utilites/helper";
import jwt from "jsonwebtoken";

import prisma from "../../../config/prisma";
import { loginUserType, userDetail } from "../../../types/type";

export const registerUser = async (newUser: userDetail) => {
  const existing = await GetUserByEmail(newUser.email);
  if (existing) {
    throw new Error("email already exist");
  }
  const hashPass = await bcrypt.hash(newUser.password, 10);
  const user = await prisma.users.create({
    data: {
      ...newUser,
      password: hashPass,
    },
  });
  return user;
};

export const loginUser = async (login: loginUserType) => {
  const user = await GetUserByEmail(login.email);
  if (!user) {
    throw new Error("invalid email address");
  }
  const isMatch = await bcrypt.compare(login.password, user.password);
  if (!isMatch) {
    throw new Error("invalid password");
  }
  const JWT_KEY = process.env.JWT_KEY || "";
  const token = jwt.sign(
    {
      userId: user.user_id,
      email: user.email,
    },
    JWT_KEY,
    {
      expiresIn: "7d",
    }
  );
  return { token: token, userData: user };
};
