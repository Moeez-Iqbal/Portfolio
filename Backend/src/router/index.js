import { Router } from "express";
import projectRouter from "./ProjectDetails/index.js";


const allRouter = Router();
allRouter.use(projectRouter);

export default allRouter