"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Exercise2() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Vui lòng nhập họ tên!";

    if (!form.email.trim()) newErrors.email = "Vui lòng nhập email!";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email không hợp lệ!";

    if (!form.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại!";
    else if (!/^[0-9]{9,11}$/.test(form.phone))
      newErrors.phone = "Số điện thoại không hợp lệ!";

    if (!form.dob) newErrors.dob = "Vui lòng chọn ngày sinh!";

    if (!form.gender) newErrors.gender = "Vui lòng chọn giới tính!";

    if (!form.address.trim()) newErrors.address = "Vui lòng nhập địa chỉ!";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitted data:", form);
      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
      });
    }
  };

  return (
    <div className="space-y-4 max-w-2xl">
      <h2 className="text-2xl font-bold">Exercise 2: Form Validation</h2>

      <p className="text-sm text-muted-foreground">
        Form đăng ký với validation chi tiết cho từng trường thông tin
      </p>

      {submitted && (
        <p className="text-green-600 text-sm">
          Đăng ký thành công — dữ liệu đã được xử lý!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="space-y-1">
          <Label>* Họ và tên</Label>
          <Input
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Nhập họ và tên"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
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

        {/* Phone */}
        <div className="space-y-1">
          <Label>* Số điện thoại</Label>
          <Input
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Nhập số điện thoại"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
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
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        {/* Gender */}
        <div className="space-y-1">
          <Label>* Giới tính</Label>

          <Select
            value={form.gender}
            onValueChange={(value) => handleChange("gender", value)}
          >
            <SelectTrigger
              className={errors.gender ? "border-red-500" : ""}
            >
              <SelectValue placeholder="Chọn giới tính" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="male">Nam</SelectItem>
              <SelectItem value="female">Nữ</SelectItem>
              <SelectItem value="other">Khác</SelectItem>
            </SelectContent>
          </Select>

          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}
        </div>

        {/* Address */}
        <div className="space-y-1">
          <Label>* Địa chỉ</Label>
          <Textarea
            rows={4}
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Nhập địa chỉ"
            className={errors.address ? "border-red-500" : ""}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        <Button type="submit">Đăng ký</Button>
      </form>
    </div>
  );
}
