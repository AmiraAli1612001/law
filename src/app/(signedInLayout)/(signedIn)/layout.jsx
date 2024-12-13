"use client";
import Popups from "@/components/popups/Popups";
import SmallPopups from "@/components/smallPopups/SmallPopups";
import { useRouter,redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const {user} = useSelector((state) => state.auth);
  const router = useRouter();

  if (!user && typeof window !== "undefined") {
    // router.replace("/auth");
    redirect("/auth");
  }

  if (user) {
    return (
      <>
        <Popups />
        <SmallPopups/>
        {children}
      </>
    );
  }
}
