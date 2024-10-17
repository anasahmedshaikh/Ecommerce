import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TopBanner from "@/components/topBanner";

export const metadata: Metadata = {
  title: "Shop.co",
  description: "Ecommerce store hard on developers",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <body className="bg-white">
        <TopBanner/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
