import {
  resetAuth,
  toggleSignIn,
  toggleUser,
} from "@/globalState/Features/authSlice";
import { store } from "@/globalState/store";
import { fetchWithCheck } from "./dataFetching";
import { toast } from "react-toastify";

export async function handleSignIn(router, email = "", password = "") {
  try {
    const res = await fetchWithCheck(`/api/EmployeeAuth/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log("res");
    console.log(res);
    store.dispatch(toggleSignIn());
    store.dispatch(toggleUser(res.token ? res : null));
    router.replace("/");
  } catch (error) {
    console.log("handleSignIn");
    toast.error(error.message);
    console.log(error);
  }
}

export function handleLogout(router) {
  router.push("/auth");
  store.dispatch(resetAuth());
}
