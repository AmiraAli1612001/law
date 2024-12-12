import { openLoader } from "@/globalState/Features/tempDataSlice";
import { store } from "@/globalState/store";
import { fetchWithCheck } from "../dataFetching";
import { lazyCloseLoader } from "../lazy";
import { toast } from "react-toastify";

export default async function deleteRecordAPI(link) {
  const {
    auth: {
      user: { token },
    },
  } = store.getState();
  store.dispatch(openLoader());
  try {
    const res = await fetchWithCheck(link, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer" + token,
      },
    });
    toast.success("success")
  } catch (err) {
    console.log(link)
    console.log(err)
    toast.error("fail")
  }finally{
    lazyCloseLoader()
  }
}
