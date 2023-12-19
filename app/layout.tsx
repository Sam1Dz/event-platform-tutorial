import { Poppins } from "next/font/google";

/* CLERK */
import { ClerkProvider } from "@clerk/nextjs";

/* GLOBAL CSS */
import "./globals.css";

/* TYPES */
import type { Metadata } from "next";

interface IRootLayoutProps {
  children: React.ReactNode;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management.",
  icons: {
    icon: "/asstes/images/logo.svg",
  },
};

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
