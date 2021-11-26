"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const movies_repository_1 = require("../repositories/movies.repository");
class MoviesController {
    constructor() {
        this.moviesRepository = new movies_repository_1.MoviesRepository();
    }
    index(req, res) {
        const movies = this.moviesRepository.getMovies();
        return res.status(200).json({ movies });
    }
}
exports.MoviesController = MoviesController;
