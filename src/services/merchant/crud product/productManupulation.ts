import prisma from "../../../config/prisma";
import { FullProduct } from "../../../types/type";

export const createProduct = async (productDetail: FullProduct) => {
  try {
    const { product_images, ...otherData } = productDetail;

    const res = await prisma.$transaction(async (tx) => {
      const product = await tx.products.create({
        data: { ...otherData },
      });

      if (!product_images || !product_images.url_0) {
        throw new Error("Valid product_images with at least url_0 is required");
      }
      await tx.product_images.create({
        data: {
          ...product_images,
          product_id: product.product_id,
        },
      });

      return await tx.products.findUnique({
        where: { product_id: product.product_id },
        include: { product_images: true },
      });
    });

    console.log("Product created successfully:", res);
    return res;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
