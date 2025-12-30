import * as z from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .email("Email không hợp lệ"),

  password: z
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),

  confirmPassword: z
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Mật khẩu nhập lại không khớp",
});
