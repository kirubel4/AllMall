import { Request, Response } from "express";

import { CreateUser, GetUserByEmail } from "../../utilites/helper";
import { User } from "../../types/type";

export const signup = async (req: Request, res: Response): Promise<any> => {
  try {
    const { first_name, last_name, email, password, phone_number, address } =
      req.body;
    if (
      !phone_number ||
      !address ||
      !password ||
      !email ||
      !first_name ||
      !last_name
    ) {
      return res.status(400).json({ error: "All fields are requireddd" });
    }

    const newUser = {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      address,
    };
    // Simulate saving to the database
    console.log("New user created:", newUser);
    const result = await CreateUser(newUser);
    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
  }
};

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
    const user = await GetUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Simulate user authentication
    console.log("User logged in:", { email });
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Errorr" });
  }
};
