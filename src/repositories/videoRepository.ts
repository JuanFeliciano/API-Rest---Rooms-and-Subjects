import { AppDataSouce } from "../data-source";
import { Video } from "../entities/Video";

export const videoRepository = AppDataSouce.getRepository(Video);
