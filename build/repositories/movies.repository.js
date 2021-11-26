"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesRepository = void 0;
const database_1 = require("../helpers/database");
class MoviesRepository {
    constructor() {
        this.keyDBName = 'movies';
        this.database = new database_1.Database();
    }
    getMovies() {
        return this.database.getData(this.keyDBName);
    }
}
exports.MoviesRepository = MoviesRepository;
