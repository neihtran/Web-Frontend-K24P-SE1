import React from "react";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import { LoginValues } from "./types";

type LoginCardProps = {
  onSubmit: (values: LoginValues) => void;
};

const LoginCard: React.FC<LoginCardProps> = ({ onSubmit }) => {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
      <LoginHeader />
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginCard;
