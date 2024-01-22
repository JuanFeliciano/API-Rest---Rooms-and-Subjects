import { Router } from "express";
import { SubjectController } from "./Controllers/SubjectController";

export const routes = Router();

routes.post("/subject", new SubjectController().create);

export default routes;
