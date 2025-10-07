'use client'
import { ToastContainer } from "react-toastify";
import "./globals.css";

const generateMetadata = {};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer/>
        {children}</body>
    </html>
  );
}
