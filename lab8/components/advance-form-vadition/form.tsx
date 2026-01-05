"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function Exercise5() {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
    dob: "",
    creditCard: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const validatePasswordStrength = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  };

  const validateCreditCard = (card: string) => {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(card);
  };

  const validateDOB = (dob: string) => {
    const date = new Date(dob);
    const today = new Date();
    return date < today;
  };

  const validate = () => {
    const newErrors: any = {};

    if (!form.password.trim())
      newErrors.password = "Vui lòng nhập mật khẩu!";
    else if (!validatePasswordStrength(form.password))
      newErrors.password =
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt!";

    if (!form.confirmPassword.trim())
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu!";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp!";

    if (!form.dob)
      newErrors.dob = "Vui lòng chọn ngày sinh!";
    else if (!validateDOB(form.dob))
      newErrors.dob = "Ngày sinh không hợp lệ!";

    if (!form.creditCard.trim())
      newErrors.creditCard = "Vui lòng nhập số thẻ!";
    else if (!validateCreditCard(form.creditCard))
      newErrors.creditCard =
        "Số thẻ không hợp lệ! Định dạng: XXXX-XXXX-XXXX-XXXX";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSuccess(false);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("VALID DATA:", form);
      setSuccess(true);
      setForm({
        password: "",
        confirmPassword: "",
        dob: "",
        creditCard: "",
      });
    }
  };

  return (
    <div className="space-y-4 max-w-2xl">
      <h2 className="text-2xl font-bold">Exercise 5: Advanced Form Validation</h2>

      <p className="text-sm text-muted-foreground">
        Form với các quy tắc validation nâng cao cho mật khẩu, ngày tháng và các trường đặc biệt khác
      </p>

      {success && (
        <p className="text-green-600 text-sm">
          Xác nhận thành công!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* PASSWORD */}
        <div className="space-y-1">
          <Label>* Mật khẩu</Label>
          <div className="relative">
            <Input
              type={showPass ? "text" : "password"}
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Nhập mật khẩu"
              className={errors.password ? "border-red-500" : ""}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="space-y-1">
          <Label>* Xác nhận mật khẩu</Label>
          <div className="relative">
            <Input
              type={showConfirm ? "text" : "password"}
              value={form.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="Xác nhận mật khẩu"
              className={errors.confirmPassword ? "border-red-500" : ""}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        {/* DOB */}
        <div className="space-y-1">
          <Label>* Ngày sinh</Label>
          <Input
            type="date"
            value={form.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            className={errors.dob ? "border-red-500" : ""}
          />
          {errors.dob && (
            <p className="text-red-500 text-sm">{errors.dob}</p>
          )}
        </div>

        {/* CREDIT CARD */}
        <div className="space-y-1">
          <Label>* Số thẻ tín dụng</Label>
          <Input
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={form.creditCard}
            onChange={(e) => handleChange("creditCard", e.target.value)}
            className={errors.creditCard ? "border-red-500" : ""}
          />
          {errors.creditCard && (
            <p className="text-red-500 text-sm">{errors.creditCard}</p>
          )}
        </div>

        <Button type="submit">Xác nhận</Button>
      </form>
    </div>
  );
}
