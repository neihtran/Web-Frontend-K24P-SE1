export type ProductCategory = "Kids" | "Mens" | "Womens";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
};
