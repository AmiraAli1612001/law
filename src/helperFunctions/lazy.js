import { closeLoader } from "@/globalState/Features/tempDataSlice";
import { store } from "@/globalState/store";
export function lazyCloseLoader() {
  const timeout = setTimeout(() => {
    store.dispatch(closeLoader());
    clearTimeout(timeout);
  }, 500);
}
