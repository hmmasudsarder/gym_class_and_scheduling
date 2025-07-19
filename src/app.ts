import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorhandler';
// import notFound from './app/middlewares/notFound';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://example.com'], // Replace with your frontend URL
    credentials: true,
  })
);

app.use('/api', router);

app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('server is ongoing 🏃‍♂️‍➡️☄️');
});

export default app;
