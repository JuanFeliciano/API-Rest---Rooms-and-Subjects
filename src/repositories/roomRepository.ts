import { AppDataSouce } from "../data-source";
import { Room } from "../entities/Room";

export const roomRepository = AppDataSouce.getRepository(Room);
