import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "Ristek Quiz",
  description: "Made by Valerian Hizkia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
