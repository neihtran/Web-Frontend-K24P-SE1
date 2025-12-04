import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="w-full rounded-full bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-rose-700"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
