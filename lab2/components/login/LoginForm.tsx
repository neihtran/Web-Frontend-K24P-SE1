"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import RememberRow from "./RememberRow";
import PrimaryButton from "@/components/common/PrimaryButton";
import { LoginValues } from "./types";

type LoginFormProps = {
  onSubmit: (values: LoginValues) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password, remember });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Username / email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon="👤"
      />

      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon="🔑"
      />

      <RememberRow
        remember={remember}
        onRememberChange={(e) => setRemember(e.target.checked)}
      />

      <PrimaryButton type="submit">Login Now →</PrimaryButton>
    </form>
  );
};

export default LoginForm;
