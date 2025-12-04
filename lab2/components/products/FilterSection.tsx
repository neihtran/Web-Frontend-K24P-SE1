import React from "react";

type FilterSectionProps = {
  title: string;
  children: React.ReactNode;
};

const FilterSection: React.FC<FilterSectionProps> = ({ title, children }) => {
  return (
    <div className="border-t border-slate-200 py-4 first:border-t-0 first:pt-0">
      <h4 className="mb-2 text-sm font-semibold text-slate-800">{title}</h4>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export default FilterSection;
