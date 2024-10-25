import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Chess Game',
  description: 'Chess game created in Next.js by Tim Falk',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
