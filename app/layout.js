import { Poppins } from "next/font/google";
import "./bg.scss";
import "./globals.css";

const noto = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin-ext"] })

export const metadata = {
  title: "Sticla.me",
  description: "Don't bottle up, Recycle Smart",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
