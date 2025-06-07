import { Request, Response } from "express";
import prisma from "../config/prisma";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.users.findMany();

    // Convert all BigInt values to strings
    const serializedUsers = users.map((user: any) => ({
      ...user,
      user_id: user.user_id.toString(),
    }));

    res.json(serializedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
