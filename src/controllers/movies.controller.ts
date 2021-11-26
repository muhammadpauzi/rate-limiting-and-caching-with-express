import { Request, Response } from 'express';
import { MoviesRepository } from '../repositories/movies.repository';

class MoviesController {
    private moviesRepository: MoviesRepository;

    constructor() {
        this.moviesRepository = new MoviesRepository();
    }

    public index(req: Request, res: Response) {
        const movies = this.moviesRepository.getMovies();
        return res.status(200).json({ movies });
    }
}

export { MoviesController };