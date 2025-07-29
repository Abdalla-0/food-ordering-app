import { cache } from "@/lib/cache"
import { db } from "@/lib/prisma"

export const getProductsByCategory = cache(
  () => {
    const products = db.category.findMany({
      include: {
        products: {
          include: {
            sizes: true,
            extras: true,
          },
        },
      },
    });
    return products;
  },
  ["products-by-category"],
  { revalidate: 3600 }
);


export const getBestSellers = cache((limit?: number | undefined) => {
  const bestSellers = db.product.findMany({
    where: {
      orders: {
        some: {}
      }
    },
    orderBy: {
      orders: {
        _count: "desc"
      }
    },
    take: limit,
    include: {
      sizes: true,
      extras: true,
    }
  })
  return bestSellers
}, ['best-sellers'], { revalidate: 3600 })


export const getProducts = cache(
  () => {
    const products = db.product.findMany({
      orderBy: {
        order: "asc",
      },
    });
    return products;
  },
  ["products"],
  { revalidate: 3600 }
);

export const getProduct = cache(
  (id: string) => {
    const product = db.product.findUnique({
      where: {
        id,
      },
      include: {
        sizes: true,
        extras: true,
      },
    });
    return product;
  },
  [`product-${crypto.randomUUID()}`],
  { revalidate: 3600 }
);

// Fake Fake Products For Home Page Sections 

export const getFakeBestSellers = async (

) => {
  const products = await db.product.findMany({
    include: {
      sizes: true,
      extras: true,
    },
  });

  return products.slice(0, 3);
};
export const getFakeLatestProducts = async (

) => {
  const products = await db.product.findMany({
    include: {
      sizes: true,
      extras: true,
    },
  });

  return products.slice(3, 6);
};
export const getFakeOffersOfTheWeek = async (

) => {
  const products = await db.product.findMany({
    include: {
      sizes: true,
      extras: true,
    },
  });

  return products.slice(6, 9);
};