import React from "react";
import { Product } from "./types";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <main className="flex-1 rounded-2xl bg-slate-50 p-4 shadow-inner">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}

        {products.length === 0 && (
          <p className="col-span-full text-center text-sm text-slate-500">
            No product found.
          </p>
        )}
      </div>
    </main>
  );
};

export default ProductGrid;
