import express from 'express';
import routerApi from './routes/index.js';
import cors from 'cors';
import { errorHandler, logErrors, boomErrorHandler } from './middlewares/error.handler.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors());

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/new_endpoint', (req, res) => {
  res.send('New endpoint!');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;