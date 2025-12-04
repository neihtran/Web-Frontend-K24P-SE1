import React from "react";
import { Product } from "./types";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="h-44 w-full bg-slate-200" />
      <div className="space-y-1 px-3 py-3">
        <div className="text-sm font-medium text-slate-900">
          {product.name}
        </div>
        <div className="text-sm font-semibold text-slate-600">
          ${product.price.toFixed(2)}
        </div>
        <div className="text-xs text-slate-400">{product.category}</div>
      </div>
    </div>
  );
};

export default ProductCard;
