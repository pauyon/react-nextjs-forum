import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from '@/app/providers';
import Header from '@/components/header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <div className="container mx-auto px-4 max-w-6xl">
              <Providers>
                <Header/>
                {children}  
              </Providers>
            </div>
        </body>
    </html>
  );
}
