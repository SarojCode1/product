import { Request, Response } from 'express';
import { Product } from '../model';

export const getAllProducts = async (req: Request, res: Response) => {
  const product = await Product.find();
  console.log(req.ip);
  // res.send('All products');
  res.status(200).json({ success: true, product });
};

export const getProduct = (req: any, res: any) => {
  res.send('Single product');
};

export const newProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.create(req.body);
    console.log(product);

    res.status(201).json({
      success: true,
      product
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).json({
        message: error.message
      });
    } else {
      res.status(500).json({
        message: 'An unknown error occurred'
      });
    }
  }
};

// A function to create products: C (POST REQUEST)
// A function to get (read) products: R (GET REQUEST)
// A function to get (read) single product: R
// A function to update products: U (PUT/PATCH REQUEST)
// A function to delete products: D (DELETE REQUEST)
// CRUD