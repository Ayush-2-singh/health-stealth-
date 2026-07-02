import type { Metadata } from "next";
  import "./globals.css";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import MotionProvider from "@/components/MotionProvider";

  export const metadata: Metadata = {
    title: "Hyper Stealth Technologies | Engineering the Invisible",
    description: "Advanced multi-spectral signature management for modern defense.",
  };

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className="font-sans antialiased bg-background text-text">
          <MotionProvider>
            <Navbar />
            <main className="relative min-h-screen">{children}</main>
            <Footer />
          </MotionProvider>
        </body>
      </html>
    );
  }
  