import { ToastContainer } from "react-toastify";
import "./globals.css";
import AppProvider from "@/redux/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <main>
            
              {children} 
            
          </main>
          <ToastContainer />
        </AppProvider>
      </body>
    </html>
  );
}
