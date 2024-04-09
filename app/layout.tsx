// /app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/app/components/nav/NavBar";
import "@/public/globals.css";
import FooterNav from "@/app/components/nav/FooterNav";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  metadata?: Metadata;
  children: React.ReactNode;
}

const NHLStatTrackerDocumentLayout: React.FC<LayoutProps> = ({ metadata = {}, children }) => {
  const title = typeof metadata.title === 'string' ? metadata.title : 'Fallback Title';

  return (
    <div className={`${inter.className} container m-auto pb-20`}>
      <NavBar />
      {children}
      <FooterNav />
    </div>
  );
};

export default NHLStatTrackerDocumentLayout;
