"use client";

import React from "react";
import FilterSection from "./FilterSection";
import Checkbox from "./Checkbox";

type FilterSidebarProps = {
  maxPrice: number;
  onPriceChange: (value: number) => void;
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  maxPrice,
  onPriceChange,
  selectedCategories,
  onToggleCategory,
}) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPriceChange(Number(e.target.value));
  };

  return (
    <aside className="w-full rounded-2xl bg-white p-4 shadow-lg lg:w-64">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Filter</h3>

      <FilterSection title="Category">
        <Checkbox
          label="Kids"
          checked={selectedCategories.includes("Kids")}
          onChange={() => onToggleCategory("Kids")}
        />
        <Checkbox
          label="Mens"
          checked={selectedCategories.includes("Mens")}
          onChange={() => onToggleCategory("Mens")}
        />
        <Checkbox
          label="Womens"
          checked={selectedCategories.includes("Womens")}
          onChange={() => onToggleCategory("Womens")}
        />
      </FilterSection>

      <FilterSection title="Price">
        <p className="mb-2 text-sm text-slate-600">
          Up to{" "}
          <span className="font-semibold text-slate-900">${maxPrice}</span>
        </p>

        {/* label ẩn để pass a11y rule */}
        <label className="block">
          <span className="sr-only">Price filter</span>
          <input
            type="range"
            min={0}
            max={100}
            value={maxPrice}
            onChange={handleSliderChange}
            className="w-full accent-slate-900"
            aria-label="Price filter"
          />
        </label>
      </FilterSection>
    </aside>
  );
};

export default FilterSidebar;
