import type { Metadata } from "next";
import "./globals.scss";

import Header from "@components/header/Header";
import StarsBack from "@components/starsBack/StarsBack";
import LightBack from "@components/lightBack/LightBack";

export const metadata: Metadata = {
  title: "NEAR.AI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <LightBack />
        <StarsBack />
        <Header />
        {children}
      </body>
    </html>
  );
}
