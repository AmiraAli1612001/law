"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
const apiKey = process.env.NEXT_PUBLIC_DEV;

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    let [Error , setError] = useState(null)

    const login = async (email, password) => {
        try {
            const response = await fetch(`${apiKey}/EmployeeAuth/Login`, {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                localStorage.setItem("token", data.token);
                router.push("/");
            } else {
                setError("خطأ في كلمة السر او البريد الالكتروني")
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ login , Error , setError}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
