export type Product = { id: string; name: string; price: number; description: string };

export const products: Product[] = [
  { id: "1", name: "Laptop A", price: 1500, description: "Laptop A - mượt, pin trâu." },
  { id: "2", name: "Laptop B", price: 1200, description: "Laptop B - gọn nhẹ, đẹp." },
  { id: "3", name: "Laptop C", price: 1800, description: "Laptop C - gaming, mạnh." },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
