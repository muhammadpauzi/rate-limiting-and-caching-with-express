import express, { Application } from 'express';
import moviesRoute from './routes/movies.route';
import rateLimit from 'express-rate-limit';

const app: Application = express();
const port: number = 5000;

// middlewares
app.use(rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 5
}));

app.set('trust proxy', 1)
// routes
app.use('/api/movies', moviesRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}....`);
});


