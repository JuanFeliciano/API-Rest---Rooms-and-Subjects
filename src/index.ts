import express from "express";
import { AppDataSouce } from "./data-source";

AppDataSouce.initialize().then(() => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    return res.json("Hello World");
  });

  return app.listen(process.env.PORT);
});
