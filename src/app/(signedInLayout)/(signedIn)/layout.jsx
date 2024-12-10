"use client";
import Popups from "@/components/popups/Popups";
import SmallPopups from "@/components/smallPopups/SmallPopups";
import { useRouter,redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const isSignedIn = useSelector((store) => store.auth.isSignedIn);
  const router = useRouter();

  console.log(isSignedIn);
  if (!isSignedIn && typeof window !== "undefined") {
    // router.replace("/auth");
    redirect("/auth");
  }
  if (isSignedIn) {
    return (
      <>
        <Popups />
        <SmallPopups/>
        {children}
      </>
    );
  }
}
