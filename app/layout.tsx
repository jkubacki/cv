import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrintButton from '@/components/PrintButton';
import DownloadPDFButton from '@/components/DownlaodPDFButton';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jakub Kubacki - Resume",
  description: "Resume of Jakub Kubacki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="print:hidden absolute top-1 left-1">
        </div>
        <div className="absolute top-1 right-1 flex gap-2">
          <DownloadPDFButton />
          <PrintButton />
        </div>
      </body>
    </html>
  );
}
