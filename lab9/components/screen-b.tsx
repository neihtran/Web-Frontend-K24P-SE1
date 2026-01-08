"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { logout } from "@/lib/features/auth-slice";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function ScreenB({
  setActiveTab,
}: {
  setActiveTab: (val: string) => void;
}) {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogout = () => {
    dispatch(logout());
    setActiveTab("a");
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-xl font-bold">Thông tin User</CardTitle>
        <ModeToggle />
      </CardHeader>

      <CardContent>
        {!isAuthenticated ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <p className="text-destructive font-medium">Bạn chưa đăng nhập!</p>
            <Button onClick={() => setActiveTab("a")}>
              Quay lại Đăng nhập
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 border rounded-xl bg-secondary/20">
              <Avatar className="h-20 w-20 border-2 border-primary">
                <AvatarImage src={user?.image} alt={user?.firstName} />
                <AvatarFallback className="text-xl">
                  {user?.firstName?.[0]}
                  {user?.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold leading-none">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    @{user?.username}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    ID: {user?.id}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 border rounded-lg">
                <p className="text-muted-foreground">Giới tính</p>
                <p className="font-semibold capitalize">{user?.gender}</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-muted-foreground">Trạng thái</p>
                <p className="font-semibold text-green-500">Đang hoạt động</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>

      {isAuthenticated && (
        <CardFooter className="border-t pt-6">
          <Button
            variant="destructive"
            className="w-full gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Đăng xuất khỏi hệ thống
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
