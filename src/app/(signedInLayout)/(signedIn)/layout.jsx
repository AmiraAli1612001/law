"use client";
import Popups from "@/components/popups/Popups";
import SmallPopups from "@/components/smallPopups/SmallPopups";
import { useRouter,redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const {user:{token}} = useSelector((state) => state.auth);
  const router = useRouter();

  if (!token && typeof window !== "undefined") {
    // router.replace("/auth");
    redirect("/auth");
  }

  if (token) {
    return (
      <>
        <Popups />
        <SmallPopups/>
        {children}
      </>
    );
  }
}
