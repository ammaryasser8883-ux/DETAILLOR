import type { Metadata } from 'next';
import './globals.css';
import { Cinzel, Montserrat } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500'], display: 'swap' });

export const metadata: Metadata = {
  title: 'DETAILLOR | Engineered Garment Accessories',
  description: 'Luxury garment accessories engineered for modern fashion brands.',
  metadataBase: new URL('https://detaillor.vercel.app'),
  openGraph: {
    title: 'DETAILLOR',
    description: 'Luxury garment accessories engineered for modern fashion brands.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-ink text-frost">
      <body className={`${cinzel.className} ${montserrat.className} min-h-full`}>{children}</body>
    </html>
  );
}
