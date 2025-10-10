import { ToastContainer } from "react-toastify";
import "./globals.css";
import AppProvider from "@/redux/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <main>
            <div className=" bg-black flex w-[100vw] h-screen py-4" >
              {children} 
            </div>
          </main>
          <ToastContainer />
        </AppProvider>
      </body>
    </html>
  );
}
