import { Poppins } from "next/font/google";
import "./bg.scss";
import "./globals.css";

const noto = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin-ext"] })

export const metadata = {
  title: "sticla.me",
  description: "Venim la tine acasǎ, luǎm sticlele, și le reciclam pentru tine.",
  metadataBase: new URL('https://sticla.me'),
  openGraph: {
    images: '/logo.jpeg',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={noto.className}>{children}</body>
    </html>
  );
}
