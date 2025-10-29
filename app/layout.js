import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: "Next.js + Tailwind Boilerplate",
  description: "Minimal Next.js app with Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer/>
        <FloatingButtons/>
      </body>
    </html>
  );
}
