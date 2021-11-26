import { Database } from "../helpers/database";
import { IMovie } from "../interfaces/movies.interface";

class MoviesRepository {
    private database: Database;
    private keyDBName: string = 'movies';

    constructor() {
        this.database = new Database();
    }

    getMovies() {
        return this.database.getData(this.keyDBName);
    }
}

export { MoviesRepository };