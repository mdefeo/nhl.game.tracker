// /app/layout.tsx
import type { ReactNode } from "react";
import Head from 'next/head';
import { Inter } from "next/font/google";
import NavBar from "@/app/components/nav/NavBar";
import "@/public/globals.css";
import FooterNav from "@/app/components/nav/FooterNav";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  metadata?: {
    title?: string;
    description?: string;
    favicon?: string;
  };
  children: ReactNode;
}

const NHLStatTrackerDocumentLayout: React.FC<LayoutProps> = ({ metadata = {}, children }) => {
  const title = metadata.title || 'NHL Stat Tracker';
  const description = metadata.description || 'Track your favorite NHL stats and teams in real-time.';

  return (
    <div className={`${inter.className} container m-auto pb-20`}>
      <Head>
        <title>{`NHL Stat Tracker | ${title}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <NavBar />
      {children}
      <FooterNav />
    </div>
  );
};

export default NHLStatTrackerDocumentLayout;
