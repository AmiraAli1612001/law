"use client";
import Popups from "@/components/popups/Popups";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const isSignedIn = useSelector((store) => store.auth.isSignedIn);
  const router = useRouter();

  console.log(isSignedIn);

  if (!isSignedIn && router) {
    router.replace("/auth");
  }
  if (isSignedIn) {
    return (
      <>
        <Popups />
        {children}
      </>
    );
  }
}
