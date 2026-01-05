"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Exercise1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: any = {};

    if (!name.trim()) newErrors.name = "Vui lòng nhập họ tên!";
    if (!email.trim()) newErrors.email = "Vui lòng nhập email!";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Email không hợp lệ!";
    if (!message.trim()) newErrors.message = "Vui lòng nhập tin nhắn!";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log({ name, email, message });
      setSubmitted(true);

      // reset form
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        Exercise 1: Building a Simple Contact Form
      </h2>

      <p className="text-sm text-muted-foreground">
        Form liên hệ đơn giản với các trường: tên, email và tin nhắn
      </p>

      {submitted && (
        <p className="text-green-600 text-sm">
          Gửi thành công — cảm ơn bạn!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* name */}
        <div className="space-y-1">
          <Label>* Họ tên</Label>
          <Input
            placeholder="Nhập họ tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {/* email */}
        <div className="space-y-1">
          <Label>* Email</Label>
          <Input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* message */}
        <div className="space-y-1">
          <Label>* Tin nhắn</Label>
          <Textarea
            placeholder="Nhập tin nhắn của bạn"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
            className={errors.message ? "border-red-500" : ""}
            rows={5}
          />

          <div className="flex justify-between text-sm">
            {errors.message && (
              <p className="text-red-500">{errors.message}</p>
            )}
            <span className="text-gray-500">{message.length}/500</span>
          </div>
        </div>

        <Button type="submit">
          Gửi tin nhắn
        </Button>
      </form>
    </div>
  );
}
