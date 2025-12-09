import React from "react";
import Image from "next/image";
export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-rating">
        {"★★★★★"}
        <span className="rating-count">(5)</span>
      </div>

      <Image
        src={product.imageUrl}
        alt={product.name}
        width={64}
        height={64}
        className="product-image"
      />

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
}
