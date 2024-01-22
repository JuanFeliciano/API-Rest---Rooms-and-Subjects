import express from "express";
import { AppDataSouce } from "./data-source";
import routes from "./routes";

AppDataSouce.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(routes);

  return app.listen(process.env.PORT);
});
