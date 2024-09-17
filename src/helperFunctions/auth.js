import { toggleSignIn } from "@/globalState/Features/authSlice";
import { store } from "@/globalState/store";

export function handleSignIn(router) {
  store.dispatch(toggleSignIn());
  router.replace("/");
}
