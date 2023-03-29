import express from 'express';
import products from './routes/products';

// // Create an instance of the express app

const app = express();

app.use(express.json());
// localhost:4000/api/v1
app.use('/api/v1', products);

export default app;