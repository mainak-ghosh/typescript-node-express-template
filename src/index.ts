import express from 'express';
import config from 'config';
import testRoute from './routes/test.route'
const host = config.get('host') as string;
const port = config.get('port') as number;

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',testRoute);

app.listen(port, host, () => {
  console.log(`server is running at http://${host}:${port}`);
});

