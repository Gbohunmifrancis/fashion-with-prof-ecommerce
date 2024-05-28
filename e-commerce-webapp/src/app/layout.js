import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import MobNavbar from "@/components/MobNavbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop/>
        <HeaderMain/>
        <Navbar/>
        
        <MobNavbar/>
        
        {children}
        </body>
    </html>
  );
}
