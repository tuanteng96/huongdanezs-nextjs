import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const BeVietNam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  variable: "--font-be",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={BeVietNam.className}>
        <div className="font-thin">a</div>
        {children}
      </body>
    </html>
  );
}
