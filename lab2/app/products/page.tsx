"use client";

import { useState } from "react";
import FilterSidebar from "@/components/products/FilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import { Product } from "@/components/products/types";

const PRODUCTS: Product[] = [
  { id: 1, name: "Bradley Burgess 2", price: 20, category: "Kids" },
  { id: 2, name: "Allie Sharp", price: 30, category: "Mens" },
  { id: 3, name: "Nathaniel Baldwin", price: 40, category: "Womens" },
  { id: 4, name: "Effie Rios", price: 50, category: "Mens" },
  { id: 5, name: "Minimal Vase", price: 60, category: "Womens" },
  { id: 6, name: "Wood Lamp", price: 80, category: "Kids" },
];

export default function ProductPage() {
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleToggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchPrice = p.price <= maxPrice;
    const matchCategory =
      selectedCategories.length === 0 || selectedCategories.includes(p.category);
    return matchPrice && matchCategory;
  });

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
        <FilterSidebar
          maxPrice={maxPrice}
          onPriceChange={setMaxPrice}
          selectedCategories={selectedCategories}
          onToggleCategory={handleToggleCategory}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
