import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
export const VerifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const JWT_KEY = process.env.JWT_KEY || "";
    const token = req.headers.authorization?.split(" ")[1]; // Assuming the token is sent in the Authorization header
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }
    const decoded = jwt.verify(token, JWT_KEY);
    (req as any).user = decoded;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
