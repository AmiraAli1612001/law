import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/form/form.css";
import { StateProvider } from "@/globalState/StateProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cairo } from "next/font/google";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const cairo = Cairo({ subsets: ["arabic"], display: "swap" });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className}   antialiased min-h-screen h-fit flex flex-col justify-between`}
        dir="rtl"
      >
        <StateProvider>
          <ToastContainer />
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
