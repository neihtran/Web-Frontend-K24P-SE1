"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Eye, EyeOff, XCircle } from "lucide-react";

export default function Exercise4() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!form.username.trim())
      newErrors.username = "Vui lòng nhập tên đăng nhập!";
    else if (form.username.length < 4)
      newErrors.username = "Tên đăng nhập phải có ít nhất 4 ký tự!";

    if (!form.email.trim())
      newErrors.email = "Vui lòng nhập email!";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email không hợp lệ!";

    if (!form.password.trim())
      newErrors.password = "Vui lòng nhập mật khẩu!";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");
    setSuccess(false);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      // FAKE API
      const res = await axios.post("/api/register", form);

      console.log("API result:", res.data);
      setSuccess(true);
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      setApiError("Có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 max-w-2xl">
      <h2 className="text-2xl font-bold">Exercise 4: API Form Submission</h2>

      <p className="text-sm text-muted-foreground">
        Form đăng ký tài khoản với xử lý gửi dữ liệu lên API và hiển thị thông báo lỗi
      </p>

      {apiError && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertTitle>Lỗi</AlertTitle>
          <AlertDescription>{apiError}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="border-green-500 text-green-700">
          Đăng ký thành công!
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* USERNAME */}
        <div className="space-y-1">
          <Label>* Tên đăng nhập</Label>
          <Input
            value={form.username}
            onChange={(e) => handleChange("username", e.target.value)}
            placeholder="Nhập tên đăng nhập"
            className={errors.username ? "border-red-500" : ""}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="space-y-1">
          <Label>* Email</Label>
          <Input
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Nhập email"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

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

        <Button type="submit" disabled={loading}>
          {loading ? "Đang xử lý..." : "Đăng ký"}
        </Button>
      </form>
    </div>
  );
}
