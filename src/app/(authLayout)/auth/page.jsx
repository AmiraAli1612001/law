"use client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "@/context/Auth";

const Auth = () => {
  let { login, Error , setError} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    login(email, password);
  };

  return (
    <div className="bg-white drop-shadow flex h-full flex-1">
      <section className="flex-1 items-center justify-center bg-textGreen hidden lg:flex">
        <img src="/images/logos/صقور الشعار.png" alt="Logo" />
      </section>
      <section className="flex-1 bg-bgGreen lg:bg-white p-4 lg:p-10 flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[500px] w-full flex flex-col gap-8"
        >
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-textGreen">
            اهلا بك في صقور القمة
          </h2>

          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="text-sm text-textGreen md:text-base">
              البريد الالكتروني
            </label>
            <input
         
              id="email"
              type="email"
              {...register("email", {
                required: "البريد الالكتروني مطلوب",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "البريد الالكتروني غير صالح"
                }
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="password" className="text-sm text-textGreen md:text-base">
              كلمة المرور
            </label>
            <input
           
              id="password"
              type="password"
              {...register("password", {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 6,
                  message: "يجب أن تكون كلمة المرور 6 أحرف أو أكثر"
                }
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          {Error && Error != null && <p className="text-red-500 text-sm">{Error}</p>}

          <button
            className="bg-textGreen text-white font-semibold text-xl p-4 rounded"
            type="submit"
          >
            تسجيل الدخول
          </button>
        </form>
      </section>
    </div>
  );
};

export default Auth;
