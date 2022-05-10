import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const v1Router = require('./v1/routes/index.route');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api/v1', v1Router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to FamTree');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
