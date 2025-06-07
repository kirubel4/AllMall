import prisma from "../config/prisma";
import { User } from "../types/type";

export const CreateUser = async (data: User) => {
  try {
    const newUser = await prisma.users.create({
      data, // ✅ wrap in an object with key `data`
    });
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const GetUserByEmail = async (email: string) => {
  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};
