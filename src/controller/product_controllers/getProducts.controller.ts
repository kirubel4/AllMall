import { Request, Response } from "express";
import * as productServices from "../../services/customer/fetch/fetchproducts";
import { error } from "console";
import { FullProduct } from "../../types/type";
import { convertBigIntsOnly } from "../../utilites/helper";

export const getSingleProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = req.params.id ? BigInt(req.params.id) : null;
  if (!id) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
  try {
    const product = await productServices.singleProduct(id);

    if (product === null) {
      return res.status(404).json({ message: "Product not found" });
    }
    const pro = product as FullProduct; // Type assertion to FullProduct
    // Serialize the product data

    const serialized = convertBigIntsOnly([pro]); // Serialize the product
    if (!serialized || serialized.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.json(serialized); // Send product to client
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const products = await productServices.allProducts();
    if (!products || products.length === 0)
      return res.status(404).json({ error: "No products found" });

    const serialized = convertBigIntsOnly(products);

    return res.status(200).json(serialized);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getProductsByCategory = async (
  req: Request,
  res: Response
): Promise<any> => {
  const catagory = req.body;
  if (!catagory || !catagory.name) {
    return res.status(400).json({ error: "Invalid category name" });
  }
  try {
    const products = await productServices.productsByCatagories(catagory);
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ error: "No products found in this category" });
    }
    const serialized = convertBigIntsOnly(products);
    return res.status(200).json(serialized);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
export const getProductsByStore = async (
  req: Request,
  res: Response
): Promise<any> => {
  const storeName = req.body;
  if (!storeName || !storeName.name) {
    return res.status(400).json({ error: "Invalid store name" });
  }
  try {
    const products = await productServices.productsByStore(storeName);
    if (!products || products.length === 0) {
      return res.status(404).json({ error: "No products found in this store" });
    }
    const serialized = convertBigIntsOnly(products);
    return res.status(200).json(serialized);
  } catch (error) {
    console.error("Error fetching products by store:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
