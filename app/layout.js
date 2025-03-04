import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import CardContainer from "./Components/CardContainer";

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
      <body className={`${robotoMono.variable}`}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
          <CardContainer />
        </main>
      </body>
    </html>
  );
}
