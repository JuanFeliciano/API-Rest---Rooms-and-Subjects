import { AppDataSouce } from "../data-source";
import { Subject } from "../entities/Subject";

export const subjectRepository = AppDataSouce.getRepository(Subject);
