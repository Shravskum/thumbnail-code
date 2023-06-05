import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const validatePublicCors = cors({
  origin: [process.env.PUBLIC_URL.split(',')]
});
app.use(validatePublicCors);

app.use('/', routes);
app.options('/', validatePublicCors);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
