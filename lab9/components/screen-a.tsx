"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/lib/features/auth-slice";
import { RootState } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "./mode-toggle";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import axios from "axios";


interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export default function ScreenA({
  setActiveTab,
}: {
  setActiveTab: (val: string) => void;
}) {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post<LoginResponse>(
        "https://dummyjson.com/auth/login",
        {
          username,
          password,
        }
      );

      dispatch(
        loginSuccess({
          user: res.data,
          token: res.data.accessToken,
        })
      );

      setActiveTab("b");
    } catch (error: unknown) {
      let errorMessage = "Lỗi kết nối";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || "Đăng nhập thất bại";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      alert("Đăng nhập thất bại: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Đăng nhập</CardTitle>
        <ModeToggle />
      </CardHeader>
      <CardContent className="space-y-4">
        {auth.isAuthenticated ? (
          <div className="text-center py-6 space-y-2">
            <p className="text-green-500 font-bold">
              Chào mừng trở lại, {auth.user?.firstName}!
            </p>
            <Button variant="outline" onClick={() => setActiveTab("b")}>
              Đi đến Hồ sơ
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Tên đăng nhập</label>
              <Input
                placeholder="Nhập username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Mật khẩu</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              className="w-full mt-2"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? "Đang xác thực..." : "Đăng nhập"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
