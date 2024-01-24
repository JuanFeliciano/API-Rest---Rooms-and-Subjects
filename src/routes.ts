import { Router } from "express";
import { SubjectController } from "./Controllers/SubjectController";
import { RoomController } from "./Controllers/roomController";

export const routes = Router();

routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomController().create);
routes.get("/room", new RoomController().list);
routes.post("/room/:idRoom/create", new RoomController().createVideo);
routes.post("/room/:idRoom/subject", new RoomController().roomSubject);

export default routes;
