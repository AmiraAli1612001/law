// import {
//   resetAuth,
//   toggleSignIn,
//   toggleUser,
// } from "@/globalState/Features/authSlice";
// import { store } from "@/globalState/store";
// import { fetchWithCheck } from "./dataFetching";
// import { toast } from "react-toastify";

// export async function handleSignIn(router, email, password) {
//   const apiKey = process.env.NEXT_PUBLIC_DEV;

//   if (!apiKey) {
//     toast.error("API key is missing. Please check the environment configuration.");
//     return;
//   }

//   try {
//     const res = await fetch(`${apiKey}EmployeeAuth/Login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//       cache: "no-store",
//     });

//     const { token } = await res.json();
//     if (token) {
//       store.dispatch(toggleSignIn());
//       store.dispatch(toggleUser({ token }));
//       router.replace("/");
//     } else {
//       throw new Error("Invalid credentials.");
//     }
//   } catch (error) {
//     toast.error(error.message || "Failed to sign in. Please try again.");
//     console.error("Sign-In Error:", error);
//   }
// }

// export function handleLogout(router) {
//   router.push("/auth");
//   store.dispatch(resetAuth());
// }








