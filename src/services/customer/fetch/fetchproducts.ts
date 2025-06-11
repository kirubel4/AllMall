import { Request, Response } from "express";
import prisma from "../../../config/prisma";

export const singleProduct = async (id: bigint) => {
  try {
    if (!id) return null;
    const products = await prisma.products.findUnique({
      where: { product_id: id },
      include: {
        reviews: true,
        product_images: true,
      },
    });
    return products;
  } catch (error: any | string) {
    console.error("Error fetching products:", error);
  }
};
export const allProducts = async () => {
  try {
    const products = await prisma.products.findMany({
      include: {
        reviews: true,
        product_images: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: 20,
    });
    return products;
  } catch (error: any | string) {
    console.error("Error fetching all products:", error);
  }
};
export const productsByCatagories = async (catagory: string) => {
  try {
    if (!catagory) return null;
    const catagories = await prisma.categories.findUnique({
      where: { name: catagory },
    });
    if (!catagories) {
      console.error("Category not found:", catagory);
      return null;
    }
    const products = await prisma.products.findMany({
      where: { category_id: catagories?.category_id },
      include: {
        reviews: true,
        product_images: true,
      },
    });
    return products;
  } catch (error: any | string) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export const productsByStore = async (storename: string) => {
  try {
    if (!storename) return null;
    const store = await prisma.merchants.findUnique({
      where: { business_name: storename },
    });
    if (!store) {
      console.error("Store not found:", storename);
      return null;
    }
    const products = await prisma.products.findMany({
      where: { merchant_id: store.merchant_id },
      include: {
        reviews: true,
        product_images: true,
      },
    });
    return products;
  } catch (error: any | string) {
    {
      console.error("Error fetching products by store:", error);
      return null;
    }
  }
};

export const productsBySearch = async (search: string) => {
  try {
    if (!search) return [];
    const products = await prisma.products.findMany({
      where: {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      },
      include: {
        reviews: true,
        product_images: true,
      },
    });
    return products;
  } catch (error: any | string) {
    console.error("Error fetching products by search:", error);
    return [];
  }
};
