import express from "express";
import router from "./routes";
import cors from "cors";
import * as helper from "../src/utilites/helper";
console.log(helper); // Check if GetUserByEmail exists

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", router);

export default app;
