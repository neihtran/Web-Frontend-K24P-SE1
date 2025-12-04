import React from "react";

type InputFieldProps = {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  icon,
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm text-slate-600">{label}</label>
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
        <span className="text-base">{icon}</span>
        <input
          className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label}
        />
      </div>
    </div>
  );
};

export default InputField;
