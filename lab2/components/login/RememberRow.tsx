import React from "react";

type RememberRowProps = {
  remember: boolean;
  onRememberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RememberRow: React.FC<RememberRowProps> = ({
  remember,
  onRememberChange,
}) => {
  return (
    <div className="flex items-center justify-between text-sm">
      <label className="flex items-center gap-2 text-slate-600">
        <input
          type="checkbox"
          checked={remember}
          onChange={onRememberChange}
          className="h-4 w-4 rounded border-slate-300 text-rose-500 focus:ring-rose-400"
        />
        <span>Remember me</span>
      </label>
      <button
        type="button"
        className="text-sm font-medium text-rose-500 hover:underline"
      >
        Forget Password
      </button>
    </div>
  );
};

export default RememberRow;
