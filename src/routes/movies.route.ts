import { Router, Request, Response } from "express";
import { MoviesController } from "../controllers/movies.controller";
import apicache from 'apicache';

const router: Router = Router();
const moviesController = new MoviesController();
const cache = apicache.middleware;

router.get('/', cache('1 minutes'), (req: Request, res: Response) => moviesController.index(req, res));

export default router;