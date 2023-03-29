// Define a route handler for the default home page
import express from 'express';
import { getAllProducts, getProduct, newProduct } from '../controller/products';

const router = express.Router();

// app.get()
// app.get('/api/v1', getRoute);
// app.get('/login', loginRoute);

router.route('/products').get(getAllProducts);
router.route('/product').get(getProduct);

// localhost:4000/api/v1/product/new
router.route('/product/new').post(newProduct);
export default router;


// localhost:3000/api/v1
