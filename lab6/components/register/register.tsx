"use client";
import { schema } from "@/lib/validations/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = ( data: any) => {
        console.log("Dữ liệu hợp lệ: ", data);
    };
    return ( 
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
        <div>
            <label className="block">Tên</label>
            <input {...register("name")}/>
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
            <label className="block">Email</label>
            <input {...register("email")} className="boder p-2 w-full" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
            <label className="block" >Mật khẩu</label>
            <input type="password" {...register("password")} className="boder p-2 w-full"/>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div>
            <label className="block" >Xác nhận mật khẩu</label>
            <input type="confirmPassword" {...register("confirmPassword")} className="boder p-2 w-full"/>
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="">Đăng Ký</button>
    </form>
    );
}
 
