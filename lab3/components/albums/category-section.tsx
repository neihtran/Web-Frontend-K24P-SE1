import React from "react";
import ProductCard, { Product } from "./product-card";

type CategorySectionProps = {
  title: string;
  products: Product[];
};

export default function CategorySection({
  title,
  products,
}: CategorySectionProps) {
  return (
    <section className="album-column">
      <h2 className="album-title">{title}</h2>
      <div className="album-products">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
