import { Router } from "express";
import { SubjectController } from "./Controllers/SubjectController";
import { RoomController } from "./Controllers/roomController";

export const routes = Router();

routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomController().create);

export default routes;
