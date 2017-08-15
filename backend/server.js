import express from 'express';
import routes from './api/routes/routes';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);
routes(app);

console.log('initialised at: ' + port);