import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

const red_hat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Policies",
  description: "This is the policies page",
  icons: {
    icon: "./logo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={red_hat.className}>{children}</body>
    </html>
  );
}
