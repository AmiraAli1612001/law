"use client";
import { handleSignIn } from "@/helperFunctions/auth";
import { useRouter } from "next/navigation";

const Auth = () => {
  const router = useRouter();
  return (
    <div className="bg-white drop-shadow flex h-full flex-1">
      <section className="flex-1  items-center justify-center bg-textGreen hidden lg:flex">
        <img src="/images/logos/صقور الشعار.png" alt="" />
      </section>
      <section className="flex-1 bg-bgGreen lg:bg-white p-4 lg:p-10 flex justify-center items-center ">
        <form
          onSubmit={(e) => {
            // e.preventDefault();
            // handleSignIn(router);
          }}
          action=""
          className="max-w-[500px] w-full flex flex-col gap-12"
        >
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-textGreen">
            اهلا بك في صقور القمة
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-sm text-textGreen md:text-base">
                البريد الالكتروني
              </label>
              <input
                required
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-sm text-textGreen md:text-base">
                كلمة المرور
              </label>
              <input
                required
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <button
            className="bg-textGreen text-white font-semibold text-xl p-4 rounded"
            type="submit"
            // onClick={()=>handleSignIn()}
          >
            تسجيل الدخول
          </button>
        </form>
      </section>
    </div>
  );
};

export default Auth;
