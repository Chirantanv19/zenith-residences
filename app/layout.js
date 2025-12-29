import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import StickyCTA from "@/components/layout/StickyCTA";

export const metadata = {
  title: "The Zenith | Luxury Residences",
  description: "Experience the pinnacle of modern architectural mastery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <StickyCTA />
      </body>
    </html>
  );
}