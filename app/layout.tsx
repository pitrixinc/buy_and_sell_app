import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JiJi Clone",
  description: "Buy all your neds and sell what you have",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* Navbar */}
          <div className="bg-[#00b53f] w-full">
            <Navbar />
          </div>

          {children}

          {/* Footer */}
          <div className="mt-5">
          <img
              src="https://assets.jiji.ng/static/img/footer-nigeria-new.svg"
              alt="city logo"
              className="mx-auto"
            />
          </div>
        </AuthProvider>
        <footer className="bg-white md:bg-[#00b53f]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
