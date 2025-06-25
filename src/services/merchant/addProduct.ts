import prisma from "../../config/prisma"

// Interface for product input
interface ProductInput{
    name:string;
    description?: string;
    price: number;
    delivery_price: number;
    stock_quantity: number;
    category_id: bigint;
    images?: ImageInput[];
}

// Interface for the image input
interface ImageInput{
    url_0: string;
    url_1?: string;
    url_2?: string;
    alt_text?: string;
}

// Check if the user is merchant
async function checkIsMerchant(user_id: bigint): Promise<boolean>{
    const merchant = await prisma.merchants.findUnique(
        {where: { user_id: user_id}}
    );
    return !!merchant;
}

// Check if the category exists
async function checkCategoryExists(category_id: bigint): Promise<boolean>{
    const category = await prisma.categories.findUnique({
        where: {category_id: category_id}
    });
    return !! category;
}

// Add product

export const addProduct = async (user_id:bigint,productData: ProductInput)=>{
    try{
        if(!user_id){
            throw new Error("User ID is required");
        }
        if(!productData.name || productData.name.trim() === ""){
            throw new Error("Product name is required");
        }
        if(typeof productData.price !== "number" || productData.price < 0){
            throw new Error("Price must be a non-negative number")
        }
        if(typeof productData.delivery_price !== "number" || productData.delivery_price < 0){
            throw new Error("Delivery Price must be a non-negative number")
        }
        if(typeof productData.stock_quantity !== "number" || productData.stock_quantity){
            throw new Error("Stock quantity must be a non-negative number")
        }
        if(!productData.category_id){
            throw new Error("Category ID is required");
        }

        const categoryExists = await checkCategoryExists(productData.category_id);
        if (!categoryExists){
            throw new Error("Invalid category ID");
        }
        if (productData.images && productData.images.length > 0){
            for (const image of productData.images){
                if (!image.url_0){
                    throw new Error("Valid url is required for each image");
                }
                if (image.url_0.length > 255 || (image.url_1 && image.url_1.length > 255) || (image.url_2 && image.url_2.length > 255)) {
                    throw new Error("Image URLs must not exceed 255 characters");
                }
                if (image.alt_text && image.alt_text.length > 150) {
                    throw new Error("Image alt_text must not exceed 150 characters");
                }
            }
        }
        const merchant = await prisma.merchants.findUnique({
            where: {user_id: user_id},
            select: {merchant_id: true}
        });
        if (!merchant){
            throw new Error("Merchant is not found");
        }

        //create product with image using transaction
        const result = await prisma.$transaction(async (tx)=>{
            const product = await tx.products.create({
                 data: {
                    merchant_id: merchant.merchant_id,
                    category_id: productData.category_id,
                    name: productData.name,
                    description: productData.description,
                    price : productData.price,
                    delivery_price: productData.delivery_price,
                    stock_quantity : productData.stock_quantity,
                    is_active : false,
                }
            });
            // create image 

            if(productData.images && productData.images.length > 0){
                await tx.product_images.createMany({
                    data:productData.images.map((image)=>({
                        product_id : product.product_id,
                        url_0: image.url_0,
                        url_1: image.url_1,
                        url_2: image.url_2,
                        alt_text: image.alt_text,
                    }))
                })
            }
            // fech product with image too
            return tx.products.findUnique({
                where: {product_id:product.product_id},
                include: {product_images: true},
            });
        });

        
        console.log("Product and images added successfully, pending admin approval");
        return result;
    }catch(error: any) {
        console.error("Error adding product:", error.message);
        throw error;
    }
};
